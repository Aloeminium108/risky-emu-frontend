import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router"

const HomeButton: FunctionComponent = () => {

  const navigate = useNavigate();

  return (
    <div className="nav-button" onClick={() => navigate('/')}>
      <h1>RISKY EMU</h1>
    </div>
  );
}

export default HomeButton;