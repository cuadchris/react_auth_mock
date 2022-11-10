import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-uahyppq7qud11aw8.us.auth0.com"
    clientId="matzeJrcNnNRvTUGbfmyaEIRe8KG4XNB"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
