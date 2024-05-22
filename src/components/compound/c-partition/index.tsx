"use client";
import React, { useEffect, useState } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import "react-resizable/css/styles.css";

interface PartitionProps {
  id: number;
  color: string;
  onSplit: (id: number, direction: "V" | "H") => void;
  onRemove: (id: number) => void;
  style: React.CSSProperties;
}

const snapToGrid = (value: number, total: number) => {
  const ratios = [0.25, 0.5, 0.75];
  const closestRatio = ratios.reduce((prev, curr) =>
    Math.abs(curr * total - value) < Math.abs(prev * total - value)
      ? curr
      : prev
  );
  return closestRatio * total;
};

export const CPartition: React.FC<PartitionProps> = ({
  id,
  color,
  onSplit,
  onRemove,
  style,
}) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 100,
    height: typeof window !== "undefined" ? window.innerHeight : 100,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = (
    e: React.SyntheticEvent,
    { size }: ResizeCallbackData
  ) => {
    const snappedWidth = snapToGrid(size.width, dimensions.width);
    const snappedHeight = snapToGrid(size.height, dimensions.height);
    e.preventDefault();

    // Update the size state to snapped values
    const updatedStyle = {
      ...style,
      width: `${snappedWidth}px`,
      height: `${snappedHeight}px`,
    };

    style.width = updatedStyle.width;
    style.height = updatedStyle.height;
  };

  return (
    <ResizableBox
      className="relative border"
      width={parseInt(style.width as string)}
      height={parseInt(style.height as string)}
      minConstraints={[100, 100]}
      maxConstraints={[dimensions.width, dimensions.height]}
      resizeHandles={["e", "w", "n", "s", "se", "sw", "ne", "nw"]}
      onResizeStop={handleResize}
      style={{ ...style, backgroundColor: color }}
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
    </ResizableBox>
  );
};
