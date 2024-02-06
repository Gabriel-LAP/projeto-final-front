import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.tsx';
import UserPanel from './pages/UserPanel/index.tsx';
import ClientsPanel from './pages/Clients/index.tsx';
import UsersPanel from './pages/Users/index.tsx';
import StoragePanel from './pages/Storage/index.tsx';
// import OrderPanel from './components/OrderPanel/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meu-painel' element={<UserPanel />} />
        <Route path='/clientes' element={<ClientsPanel />} />
        <Route path='/funcionarios' element={<UsersPanel />} />
        <Route path='/estoque' element={<StoragePanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
