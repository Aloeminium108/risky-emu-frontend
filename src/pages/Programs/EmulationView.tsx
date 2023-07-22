import React, { FunctionComponent, useEffect, useState } from "react"
import Emulator from "../../components/Emulator/Emulator"
import { useParams } from "react-router";

const EmulationView: FunctionComponent = () => {

  const { program_id } = useParams();
  const [ binary, setBinary ] = useState<ArrayBuffer>(new ArrayBuffer(0));
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {

    const getProgram = async () => {
      const program = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/${program_id}`, {
        method: 'GET',
        mode: 'cors'
      })
      const { title, author, description, source_code, binary } = await program.json();
      setBinary(new Uint8Array(binary.data).buffer);
      setLoading(false);
    }

    getProgram();

  }, []);

  return (
    <main>
      {loading ? 
        <p>Loading</p> :
        <Emulator binary={binary} />
      }
    </main>
  )
}

export default EmulationView