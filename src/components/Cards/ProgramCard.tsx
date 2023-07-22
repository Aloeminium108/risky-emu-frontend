import React, { FunctionComponent, useContext } from "react"
import { useNavigate } from "react-router"
import { Program } from "../../types/Feature";
import { CurrentUser } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";

const ProgramCard: FunctionComponent<{program: Program}> = (props) => {

  const { currentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  const addToFeatures = async (program_id: number) => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/features/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ program_id: program_id })
    })
  }

  return (
    <div>
      <Link to={`/emulator/${props.program.program_id}`}>
        <h2>{props.program.title}</h2>
      </Link>
      <h3>{props.program.author.username}</h3>
      <p>{props.program.description}</p>

      <button onClick={() => navigate(`/programs/${props.program.program_id}`)}>Discuss</button>

      {currentUser?.role === 'admin' ?
        <button onClick={() => addToFeatures(props.program.program_id)}>Add to features</button> :
        <></>
      }

    </div>
  );
}

export default ProgramCard;