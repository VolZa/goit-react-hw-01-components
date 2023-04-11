import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Component            Props
//App                  {-}
//Profile              {username: string, tag: string, location: string, avatar: string, stats.followers: number, stats.views: number, stats.likes: number}

