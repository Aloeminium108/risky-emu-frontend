import React, { FunctionComponent, useContext } from "react"
import { useNavigate } from "react-router"
import { Discussion } from "../../types/Feature";
import { CurrentUser } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";

const CommentCard: FunctionComponent<{comment: Discussion}> = (props) => {

  const { currentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  const deleteComment = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/discussions/${props.comment.discussion_id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div>
      <h3>{props.comment.author.username}</h3>
      <p>{props.comment.content}</p>

      {currentUser?.user_id === props.comment.user_id ?
        <button onClick={() => deleteComment()}>Delete</button> :
        <></>
      }

    </div>
  );
}

export default CommentCard;