import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuStore } from './context/menuContext';
import { VideosProvider } from './context/videosContext';
import { SearchStorage } from './context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchStorage>
    <VideosProvider>
    <MenuStore>
      <App />
    </MenuStore>
    </VideosProvider>
    </SearchStorage>
  </React.StrictMode>
);
