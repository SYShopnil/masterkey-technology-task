"use client";
import React, { useState } from "react";
import { CPartition } from "../c-partition";

interface IPartitionData {
  id: number;
  color: string;
  style: React.CSSProperties;
}

const CLayout = () => {
  const [partitions, setPartitions] = useState<IPartitionData[]>([
    {
      id: 1,
      color: getRandomColor(),

      style: { width: "800px", height: "250px", position: "relative" },
    },
  ]);

  const handleOfSplit = (id: number, direction: "V" | "H") => {
    setPartitions((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      if (index === -1) return prev;

      const partition = prev[index];
      const newPartition = {
        id: prev.length + 1,
        color: getRandomColor(),
        style: {},
      };

      if (direction === "V") {
        partition.style.width = "50%";
        newPartition.style = {
          ...partition.style,
          width: "50%",
          left: "50%",
          top: partition.style.top || "0",
        };
      } else {
        partition.style.height = "50%";
        newPartition.style = {
          ...partition.style,
          height: "50%",
          top: "50%",
          left: partition.style.left || "0",
        };
      }

      partition.style = { ...partition.style, position: "absolute" };
      newPartition.style = { ...newPartition.style, position: "absolute" };

      return [...prev, newPartition];
    });
  };

  const handleRemove = (id: number) => {
    setPartitions((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className={`space-y-2`}>
      <div>
        <h1 className="text-center text-2xl font-bold pb-2">
          Recursive-partitioning
        </h1>
        <hr />
      </div>
      <div className="relative w-full h-screen">
        {partitions.map((partition) => (
          <CPartition
            key={partition.id}
            id={partition.id}
            color={partition.color}
            onSplit={handleOfSplit}
            onRemove={handleRemove}
            style={partition.style}
          />
        ))}
      </div>
    </div>
  );
};

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default CLayout;
