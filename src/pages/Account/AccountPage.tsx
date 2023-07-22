import React, { FunctionComponent, useContext, useEffect } from "react"
import { CurrentUser } from "../../context/CurrentUserContext";
import { useNavigate } from "react-router";

const AccountPage: FunctionComponent = () => {

  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate('/login');
    } else {
      // TODO: Pull in account info
    }
  })

  const logOut = () => {
    setCurrentUser?.(null);
    localStorage.removeItem('token');
  }

  // TODO: Display account info/settings
  return (
    <main>
      <button onClick={() => logOut()}>Log out</button>
    </main>
  )
}

export default AccountPage