import React, { useState } from "react";
import "./App.css";
import useMorse from "./useMorse";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const [dot, setDot] = useState("");
  const [dash, setDash] = useState("");
  let morse = useMorse(text, dot, dash, setError);

  return (
    <div className="App">
      <h1 className="title"> Morse code translator 🤐</h1>
      <p className="subTitle">Convert your text to morse code!</p>
      <p className="errorMessage">{error}</p>
      <br />
      <input
        type="text"
        placeholder="Type to translate"
        value={text}
        onChange={(event) => {
          setText(event.target.value.toLowerCase());
          setError(null);
        }}
      ></input>
      <>
        {!!morse.length && <p className="translateTitle">Before</p>}
        <p className="textBeforeMorse">{text}</p>
      </>
      {!!morse.length && (
        <>
          <p className="translateTitle">Morse Code</p>
          <p className="textAfterMorse">{morse}</p>
          <CopyToClipboard text={morse}>
            <button>Copy to Clipboard</button>
          </CopyToClipboard>
        </>
      )}
    </div>
  );
}

export default App;
