import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN} 
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID} 
  redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI} 
  >
  <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// REACT_APP_AUTH_REDIRECT_URI=http://localhost:3000
// REACT_APP_AUTH_CLIENT_ID=Qh5pRbU61FFINMrtIIXDitCeNorpqGss
// REACT_APP_AUTH_DOMAIN=dev-blv0mz5h.us.auth0.com