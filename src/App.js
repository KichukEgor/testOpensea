import React from 'react';
import Searcher from './common/components/searher/Searcher';
import CardList from './common/components/cardList/CardList';
import { OpenseaApiProvider } from './hooks/useOpenseaApi';
import './App.css';

function App() {
  return (
    <div className="App">
      <OpenseaApiProvider>
        <Searcher placeholder="Your address" />
        <CardList />
      </OpenseaApiProvider>
    </div>
  );
}

export default App;
