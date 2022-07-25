import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NewsPage from './pages/News';
import User from './pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
