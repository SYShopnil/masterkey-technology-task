"use client";
interface AlphabetTileProps {
  letter: string;
  onClick: (letter: string) => void;
}

export const CAlphabetTile: React.FC<AlphabetTileProps> = ({
  letter,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(letter)}
      className="flex items-center justify-center w-12 h-12 m-1 text-2xl font-bold bg-blue-500 text-white cursor-pointer"
    >
      {letter}
    </div>
  );
};
