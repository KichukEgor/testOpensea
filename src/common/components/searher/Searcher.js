import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Moralis from "moralis";
import {useOpenseaApiContext} from "../../../hooks/useOpenseaApi";
import {api} from "../../../api/api";

const SearchWrapper = styled.section`
  width: 100%;
`;

const Title = styled.h1`
  height: 4rem;
  padding: 1rem;
  font-size: 3rem;
`;

const SearchBlock = styled.article`
  height: 8rem;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 100%;
  width: 50rem;
  text-align: center;
  padding: .6rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: .6rem 0 0 .6rem;
  cursor: pointer;
`;

const Button = styled.button`
  height: 100%;
  width: 18rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  background: ${props => props.disabled ? "grey" : "rgba(58, 128, 194, 1)"};
  border: 2px solid black;
  border-radius: 0 .6rem .6rem 0;
  cursor: ${props => props.disabled ? "default" : "pointer"};
`;

const ErrorMessage = styled.p`
  text-align: center;
  height: 3rem;
  padding: .6rem;
  font-size: 2rem;
`;

const defaultOptions = {
    chain: "eth",
    addresses: "",
};

const Searcher = ({ placeholder }) => {
    const { updateItems } = useOpenseaApiContext()

    const [requestOptions, setRequestOptions] = useState(defaultOptions)
    const [isActive, setIsActive] = useState(false)

    useEffect(()=> {
        if(requestOptions.addresses.length === 42) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }},[requestOptions.addresses])

    const handlerChange = (eventValue) => {
        setRequestOptions({ ...requestOptions.addresses, addresses: eventValue })
    }

    const handleClick = async () => {
        const tokenMetadata = await api.get(`/v1/asset/${requestOptions.addresses}/1/?include_orders=false`);
        updateItems(tokenMetadata.collection.payment_tokens)
        // const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(requestOptions);
        // updateItems(tokenMetadata)
    }

    return (
        <SearchWrapper>
            <Title>Enter address to get NFT!</Title>
            <SearchBlock>
                <Input
                    type="text"
                    onChange={(e)=>handlerChange(e.target.value)}
                    placeholder={placeholder}
                />
                <Button disabled={!isActive} onClick={handleClick}>
                    Search
                </Button>
            </SearchBlock>
        </SearchWrapper>
    );
};

export default Searcher;