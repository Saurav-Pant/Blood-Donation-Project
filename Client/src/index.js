import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { Auth0Provider as Auth0 } from '@auth0/auth0-react';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
<Auth0
  domain="dev-bc7p2ryrcsf4y4n8.us.auth0.com"   // Make sue todd your domain and clientId i am giving reference to the docs thati preferred --> https://auth0.com/docs/quickstart/spa/react/interactive
    clientId="1xYDgFBSvcSka0Cn4BlyJRUrWdNBVpk5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}

>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>

</Auth0>
    </Router>
  </React.StrictMode>
);
