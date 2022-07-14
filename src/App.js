import React from 'react';
import { MoralisProvider } from 'react-moralis';
import Searcher from './common/components/searher/Searcher';
import CardList from './common/components/cardList/CardList';
import { OpenseaApiProvider } from './hooks/useOpenseaApi';
import './App.css';

const { DAPP_URL, APPLICATION_ID } = process.env;

function App() {
  return (
    <MoralisProvider serverUrl={DAPP_URL} appId={APPLICATION_ID}>
      <div className="App">
        <OpenseaApiProvider>
          <Searcher placeholder="Your address" />
          <CardList />
        </OpenseaApiProvider>
      </div>
    </MoralisProvider>
  );
}

export default App;
