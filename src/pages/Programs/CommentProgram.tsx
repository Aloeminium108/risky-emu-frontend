import React, { FunctionComponent, useContext, useState } from "react"
import { CurrentUser } from "../../context/CurrentUserContext";
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom";

const CommentProgram: FunctionComponent = () => {

  const navigate = useNavigate();

  const [ content, setContent ] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState(null);

  const { program_id } = useParams();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/discussions/${program_id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ program_id: program_id, content: content })
    });

    const data = await response.json();

    if (response.status === 200) {
      navigate(-1);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <h1>Comment</h1>
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
            <label htmlFor="content">Content</label>
            <input
              type="text"
              required
              value={content}
              onChange={e => setContent(e.target.value)}
              id="content"
              name="content"
            />
          </div>
        </div>
        <input type="submit" value="Leave Comment" />
      </form>
    </main>
  );
}

export default CommentProgram