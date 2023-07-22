import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router"

const LoginButton: FunctionComponent = () => {

  const navigate = useNavigate();

  return (
    <div className="nav-button" onClick={() => navigate('/login')}>
      <h1>Log in</h1>
    </div>
  );
}

export default LoginButton;