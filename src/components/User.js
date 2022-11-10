import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="container text-center">
        <h4 className="my-4">Hello, {user.email}. Enjoy !</h4>
      </div>
    )
  );
}
