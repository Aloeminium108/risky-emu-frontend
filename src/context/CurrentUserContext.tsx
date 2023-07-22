import { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";

export interface User {
  username: string
}

type CurrentUserContext = {
  currentUser: User | null, 
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>> | null
}

export const CurrentUser = createContext<CurrentUserContext>({ currentUser: null, setCurrentUser: null });

const CurrentUserProvider: FunctionComponent<{ children: ReactNode }> = (props) => {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {

    const getLoggedInUser = async () => {
      let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      let user = await response.json();
      setCurrentUser(user);
    }

    getLoggedInUser();
  }, [])

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </CurrentUser.Provider>
  )
}

export default CurrentUserProvider