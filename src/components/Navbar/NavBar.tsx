import React, { FunctionComponent, useContext } from "react"
import '../../styles/NavBar.scss'
import HomeButton from "./HomeButton"
import { CurrentUser } from "../../context/CurrentUser"
import LoginButton from "./LoginButton"
import AccountButton from "./AccountButton"

const NavBar: FunctionComponent = () => {

  const { currentUser } = useContext(CurrentUser);

  return (
    <div id="navbar">
      <HomeButton />

      {currentUser === null ?
        <LoginButton />:
        <AccountButton currentUser={currentUser} />
      } 
    </div>
  )
}

export default NavBar