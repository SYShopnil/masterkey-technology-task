"use client";
import { useState } from "react";
import { CAlphabetGrid } from "../c-alphabet-grid";

export const CAlphabetApp = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter: string) => {
    setOutputString((prev) => {
      const newString = prev + letter;
      return replaceConsecutiveLetters(newString);
    });
  };

  const replaceConsecutiveLetters = (str: string) => {
    return str.replace(/(.)\1{2,}/g, (match) => "_".repeat(match.length));
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-center text-2xl font-bold pb-2">
          Alphabet Tile Interaction
        </h1>
        <hr />
      </div>
      <div>
        <div className="mb-4 text-xl font-bold" id="outputString">
          {outputString}
        </div>
        <CAlphabetGrid onTileClick={handleTileClick} />
      </div>
    </div>
  );
};
