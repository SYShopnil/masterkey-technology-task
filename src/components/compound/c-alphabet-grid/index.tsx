"use client";

export interface ICAlphabetGrid {
  onTileClick: (letter: string) => void;
}

import { EDataTestId } from "@src/types/common";
import { CAlphabetTile } from "./c-alphabet-tile";

export const CAlphabetGrid = ({ onTileClick }: ICAlphabetGrid) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div
      className="grid grid-cols-6 gap-2 p-4"
      role={EDataTestId.CAlphabetGrid}
    >
      {letters.map((letter) => (
        <CAlphabetTile key={letter} letter={letter} onClick={onTileClick} />
      ))}
    </div>
  );
};
