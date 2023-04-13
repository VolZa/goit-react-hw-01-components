import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    gray: '#888888',
    secondary: '#000000',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);

//Component            Props
//App                  {-}
//Profile              {username: string, tag: string, location: string, avatar: string, stats.followers: number, stats.views: number, stats.likes: number}

