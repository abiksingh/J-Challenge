import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChartPage from './components/ChartPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
