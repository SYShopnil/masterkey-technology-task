"use client";

import { CAlphabetTile } from "./c-alphabet-tile";

export const CAlphabetGrid: React.FC<{
  onTileClick: (letter: string) => void;
}> = ({ onTileClick }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid grid-cols-6 gap-2 p-4">
      {letters.map((letter) => (
        <CAlphabetTile key={letter} letter={letter} onClick={onTileClick} />
      ))}
    </div>
  );
};
