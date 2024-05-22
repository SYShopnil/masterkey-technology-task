"use client";
import React, { useState } from "react";
import { CPartition } from "../c-partition";
import { EDataTestId } from "@src/types/common";

interface PartitionData {
  id: number;
  color: string;
  style: React.CSSProperties;
}

const CLayout = () => {
  const [partitions, setPartitions] = useState<PartitionData[]>([
    {
      id: 1,
      color: generateRandomColor(),
      style: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
      },
    },
  ]);

  const handleSplit = (id: number, direction: "V" | "H") => {
    setPartitions((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      if (index === -1) return prev;

      const partition = prev[index];
      const newPartition = {
        id: prev.length + 1,
        color: generateRandomColor(),
        style: { ...partition.style },
      };

      if (direction === "V") {
        partition.style.width = "50%";
        newPartition.style.width = "50%";
        newPartition.style.left = "50%";
      } else {
        partition.style.height = "50%";
        newPartition.style.height = "50%";
        newPartition.style.top = "50%";
      }

      return [...prev, newPartition];
    });
  };

  const handleRemove = (id: number) => {
    setPartitions((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="relative w-full h-screen" role={EDataTestId.CLayout}>
      {partitions.map((partition) => (
        <CPartition
          key={partition.id}
          id={partition.id}
          color={partition.color}
          onSplit={handleSplit}
          onRemove={handleRemove}
          style={partition.style}
        />
      ))}
    </div>
  );
};

function generateRandomColor() {
  const color = "#" + Math.floor(Math.random() * 1677215).toString(16);
  return color;
}

export default CLayout;
