import { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";

export interface User {

}

export const CurrentUser = createContext<User>({});

const CurrentUserProvider: FunctionComponent<{ children: ReactNode }> = (props) => {

  const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

    const getLoggedInUser = async () => {
      let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      let user = await response.json()
      setCurrentUser(user)
    }

    getLoggedInUser()
  }, [])

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </CurrentUser.Provider>
  )
}

export default CurrentUserProvider