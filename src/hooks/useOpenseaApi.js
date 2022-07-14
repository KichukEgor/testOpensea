import { useState } from 'react';
import constate from 'constate';
import testItems from '../common/constants/testItems';

const useOpenseaApi = () => {
  const [items, setItems] = useState(testItems);
  const updateItems = (data) => setItems(data);
  return { items, updateItems };
};

export const [OpenseaApiProvider, useOpenseaApiContext] = constate(useOpenseaApi);
