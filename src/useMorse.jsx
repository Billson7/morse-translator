import React, { useEffect, useState } from "react";
import morseDict from "./morseDict.json";

export default function useMorse(text, dot, dash, setError) {
  const [morseString, setMorseString] = useState("");

  useEffect(() => {
    setMorseString(
      text
        .split("")
        .map((charTranslate) => {
          return translate(charTranslate, dot, dash, setError);
        })
        .join("")
    );
  }, [text, dot, dash]);
  return morseString;
}

function translate(character, dot, dash, setError) {
  const translatedict = {
    "-": dash || "-",
    ".": dot || ".",
  };

  if (!morseDict[character]) {
    setError(
      "Please use a valid alphanumeric character, or basic punctuation, or ELSE."
    );
    return null;
  }

  let m = morseDict[character]
    .split("")
    .map((charTranslate) => translatedict[charTranslate])
    .join("");

  return m + " ";
}
