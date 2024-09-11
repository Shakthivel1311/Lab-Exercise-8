import React from 'react';
import CardList from './CardList';
import './App.css';

const App = () => {
  return (
    <div className="App p-4">
      <h1 className="text-3xl font-bold mb-6">Taxi Management System</h1>
      <CardList />
    </div>
  );
};

export default App;
