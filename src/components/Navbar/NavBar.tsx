import React, { FunctionComponent, useContext } from "react"
import '../../styles/NavBar.scss'
import HomeButton from "./HomeButton"
import { CurrentUser } from "../../context/CurrentUserContext"
import LoginButton from "./LoginButton"
import AccountButton from "./AccountButton"
import { useNavigate } from "react-router"

const NavBar: FunctionComponent = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(CurrentUser);

  return (
    <div id="navbar">
      <HomeButton />

      <div className="nav-button" onClick={() => navigate('/programs')}>
        <h1>Programs</h1>
      </div>

      <div className="nav-button" onClick={() => navigate('/new')}>
        <h1>Create a program</h1>
      </div>

      {currentUser === null ?
        <LoginButton />:
        <AccountButton currentUser={currentUser} />
      } 
    </div>
  )
}

export default NavBar