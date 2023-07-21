import React, { FunctionComponent, useContext, useState } from "react"
import { CurrentUser } from "../../context/CurrentUserContext"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage: FunctionComponent = () => {

  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser?.(data.user);
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <h1>Login</h1>
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
              type="username"
              required
              value={credentials.username}
              onChange={e => setCredentials({ ...credentials, username: e.target.value })}
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={e => setCredentials({ ...credentials, password: e.target.value })}
              id="password"
              name="password"
            />
          </div>
        </div>
        <input type="submit" value="Login" />
      </form>
      <h3>No account? Create one <Link to={'/signup'}>here!</Link></h3>
    </main>
  );
}

export default LoginPage;