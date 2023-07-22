import React, { FunctionComponent, useContext, useState } from "react"
import { CurrentUser } from "../../context/CurrentUserContext";
import { useNavigate } from "react-router"
import { Link } from "react-router-dom";

const SignupPage: FunctionComponent = () => {

  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser)

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser?.(data.user);
      localStorage.setItem('token', data.token);
      navigate('/login');
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <h1>Sign Up</h1>
      {errorMessage !== null
        ? (
          <div>
            {errorMessage}
          </div>
        )
        : null
      }
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              required
              value={user.username}
              onChange={e => setUser({ ...user, username: e.target.value })}
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              id="password"
              name="password"
            />
          </div>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <h3>Already have an account? Log in <Link to={'/login'}>here!</Link></h3>
    </main>
  );
}

export default SignupPage