"use client";

import { EDataTestId } from "@src/types/common";
import { useEffect, useState } from "react";

export interface PartitionProps {
  id: number;
  color: string;
  onSplit: (id: number, direction: "V" | "H") => void;
  onRemove: (id: number) => void;
  style: React.CSSProperties;
}

const snapToGrid = (value: number, total: number) => {
  const ratios = [0.25, 0.5, 0.75, 1];
  const closestRatio = ratios.reduce((prev, curr) =>
    Math.abs(curr * total - value) < Math.abs(prev * total - value)
      ? curr
      : prev
  );
  return closestRatio * total;
};

export const CPartition = ({
  id,
  color,
  onSplit,
  onRemove,
  style,
}: PartitionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentSize, setCurrentSize] = useState({
    width: style.width as string,
    height: style.height as string,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const newWidth = snapToGrid(
        parseInt(currentSize.width) + dx,
        window.innerWidth
      );
      const newHeight = snapToGrid(
        parseInt(currentSize.height) + dy,
        window.innerHeight
      );
      setCurrentSize({ width: `${newWidth}px`, height: `${newHeight}px` });
      style.width = `${newWidth}px`;
      style.height = `${newHeight}px`;
      setStartPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={{ ...style, backgroundColor: color }}
      className="relative border"
      role={EDataTestId.CPartition}
    >
      <div className="absolute inset-0 flex items-center justify-center space-x-2">
        <button
          onClick={() => onSplit(id, "V")}
          className="px-2 py-1 bg-white border rounded"
        >
          V
        </button>
        <button
          onClick={() => onSplit(id, "H")}
          className="px-2 py-1 bg-white border rounded"
        >
          H
        </button>
        <button
          onClick={() => onRemove(id)}
          className="px-2 py-1 bg-white border rounded"
        >
          X
        </button>
      </div>
      <div
        className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 cursor-se-resize"
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};
