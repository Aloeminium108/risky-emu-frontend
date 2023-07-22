import React, { FunctionComponent } from "react"
import { Editor, OnChange } from "@monaco-editor/react"

type Props = { 
  editMode: boolean, 
  sourceCode: string, 
  setSourceCode: React.Dispatch<React.SetStateAction<string>> 
}

const CodeEditor: FunctionComponent<Props> = (props) => {

  function handleEditorChange(value: any, event: React.ChangeEvent) {
    props.setSourceCode(value);
  }

  return (
    <Editor
      height="80vh"
      defaultLanguage="plaintext"
      defaultValue={props.sourceCode}
      onChange={handleEditorChange as any}
    />
  );
}

export default CodeEditor;