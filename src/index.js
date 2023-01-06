import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoomProvider from './context/RoomProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
      <App />
  </RoomProvider>
);
