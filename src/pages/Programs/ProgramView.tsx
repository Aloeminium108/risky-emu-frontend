import React, { FunctionComponent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Discussion } from "../../types/Feature";
import CommentCard from "../../components/Cards/CommentCard";
import { CurrentUser } from "../../context/CurrentUserContext";

const ProgramView: FunctionComponent = () => {

  const [ sourceCode, setSourceCode ] = useState<string[]>([]);
  const [ comments, setComments ] = useState<Discussion[]>([]);
  const { program_id } = useParams();

  const { currentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  useEffect(() => {

    const getProgram = async () => {
      const program = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/${program_id}`, {
        method: 'GET',
        mode: 'cors'
      })
      const { title, author, description, source_code, binary } = await program.json();
      console.log({
        title, author, description, source_code, binary
      })
      setSourceCode(source_code.split(/\r?\n/))

    }

    const getComments = async () => {
      const comments = await fetch(`${process.env.REACT_APP_SERVER_URL}/discussions/${program_id}`, {
        method: 'GET',
        mode: 'cors'
      })
      setComments(await comments.json());
    }

    getComments();
    getProgram();

  }, []);

  return (
    <main>
      {sourceCode.map((line: string, index: number) => <p key={index}>{line}</p>)}
      { currentUser === null ?
        <></> :
        <button onClick={() => navigate(`/comment/${program_id}`)}>Comment</button>
      }
      {comments.map((comment: Discussion, index: number) => <CommentCard key={index} comment={comment} />)}
    </main>
  )
}

export default ProgramView