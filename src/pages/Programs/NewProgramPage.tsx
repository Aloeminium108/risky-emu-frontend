import React, { FunctionComponent, useContext, useState } from "react"
import { CurrentUser } from "../../context/CurrentUserContext"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NewProgramPage: FunctionComponent = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(CurrentUser);

  const [ newProgram, setNewProgram ] = useState({
    title: '',
    description: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newProgram,
        source_code: '',
        binary: []
      })
    });

    const data = await response.json();

    if (response.status === 200) {
      navigate(`/editor/${data.program_id}`);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <h1>Create New Program</h1>
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
            <label htmlFor="title">title</label>
            <input
              type="text"
              required
              value={newProgram.title}
              onChange={e => setNewProgram({ ...newProgram, title: e.target.value })}
              id="title"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              value={newProgram.description}
              onChange={e => setNewProgram({ ...newProgram, description: e.target.value })}
              id="description"
              name="description"
            />
          </div>
        </div>
        <input type="submit" value="Create" />
      </form>
    </main>
  );
}

export default NewProgramPage;