import React, { FunctionComponent, useState } from "react"
import CodeEditor from "../../components/Code/CodeEditor"

const ProgramEditor: FunctionComponent = () => {

  const [ program, setProgram ] = useState<string[]>([]);

  return (
    <main>
      <CodeEditor editMode={true} program={program} setProgram={setProgram} />
    </main>
  )
}

export default ProgramEditor