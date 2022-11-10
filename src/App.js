import { useAuth0 } from "@auth0/auth0-react";
import CatFact from "./components/CatFact";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import User from "./components/User";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="container text-center">
          <p style={{ fontSize: "1.5rem" }}>Login for something cool.</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
          <User />
          <CatFact />
        </div>
      )}
    </div>
  );
}

export default App;
