import React, { FunctionComponent, useEffect, useState } from "react"
import CodeEditor from "../../components/Code/CodeEditor"
import { useParams } from "react-router";
import { Assembler } from "@aloeminium108/risc-v-emulator/dist/Assembler/assembler";

const ProgramEditor: FunctionComponent = () => {

  const [ sourceCode, setSourceCode ] = useState<string>('');
  const [ binary, setBinary ] = useState<ArrayBuffer>();
  const { program_id } = useParams();

  useEffect(() => {

    const getProgram = async () => {
      const program = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/${program_id}`, {
        method: 'GET'
      })
      const { title, author, description, source_code, binary } = await program.json();
      console.log({
        title, author, description, source_code, binary
      })
      setSourceCode(source_code)

    }

    getProgram();

  }, []);

  const postProgram = async () => {

    const lines = sourceCode.split(/\r?\n/);
    console.log(lines)

    const binaryArray = new Uint8Array(Assembler.assemble(lines));

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/${program_id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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