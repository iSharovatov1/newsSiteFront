import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import News from './components/News/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
