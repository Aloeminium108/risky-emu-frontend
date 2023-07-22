import React, { FunctionComponent, useContext } from "react"
import { useNavigate } from "react-router"
import { Feature } from "../../types/Feature";
import { Link } from "react-router-dom";
import { CurrentUser } from "../../context/CurrentUserContext";

const FeatureCard: FunctionComponent<{feature: Feature}> = (props) => {

  const { currentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  const removeFromFeatures = async (program_id: number) => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/features/`, {
      method: 'DELETE',
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
      <Link to={`/emulator/${props.feature.program_id}`}>
        <h2>{props.feature.program.title}</h2>
      </Link>
      <h3>{props.feature.program.author.username}</h3>
      <p>{props.feature.program.description}</p>

      <button onClick={() => navigate(`/programs/${props.feature.program.program_id}`)}>Discuss</button>

      {currentUser?.role === 'admin' ?
        <button onClick={() => removeFromFeatures(props.feature.program_id)}>Remove from features</button> :
        <></>
      }

    </div>
  );
}

export default FeatureCard;