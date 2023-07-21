import React, { FunctionComponent } from "react"
import { Editor } from "@monaco-editor/react"

type Props = { 
  editMode: boolean, 
  program: string[], 
  setProgram: React.Dispatch<React.SetStateAction<string[]>> 
}

const CodeEditor: FunctionComponent<Props> = (props) => {

  function handleEditorChange(value: any, event: React.ChangeEvent) {
    console.log('here is the current model value:', value);
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange as any}
    />
  );
}

export default CodeEditor;