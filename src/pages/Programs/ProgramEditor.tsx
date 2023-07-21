import React, { FunctionComponent, useEffect, useState } from "react"
import CodeEditor from "../../components/Code/CodeEditor"
import { useParams } from "react-router";
import { Assembler } from "@aloeminium108/risc-v-emulator/dist/Assembler/assembler";

const ProgramEditor: FunctionComponent = () => {

  const [ sourceCode, setSourceCode ] = useState<string>('');
  const [ binary, setBinary ] = useState<ArrayBuffer>();
  const { program_id } = useParams();

  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {

    const getProgram = async () => {
      const program = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/${program_id}`, {
        method: 'GET'
      })
      const { title, author, description, source_code, binary } = await program.json();
      console.log({
        title, author, description, source_code, binary
      })
      console.log(new Uint8Array(binary.data).buffer)
      setSourceCode(source_code)

    }

    getProgram();

  }, []);

  const postProgram = async () => {

    const binaryArray = new Uint8Array(Assembler.assemble(sourceCode.split(/\r?\n/)));

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Test Title',
        description: 'Test Description',
        source_code: sourceCode,
        binary: Array.from(binaryArray)
      })
    });

    console.log(response);
  }

  return (
    <main>
      <CodeEditor editMode={true} sourceCode={sourceCode} setSourceCode={setSourceCode} />
      <button onClick={postProgram}>Post</button>
    </main>
  )
}

export default ProgramEditor