import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './components/Auth0ProviderWithHistory';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} redirectUri={window.location.origin}> */}
      {/* <Auth0Provider domain="webdev5601.us.auth0.com" clientId="SVvAPeSI5cvSGf9P3Ye8DAU1CJmXyDEI" redirectUri={window.location.origin}> */}

      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);

