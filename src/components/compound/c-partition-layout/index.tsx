"use client";

import { useState } from "react";
import { CPartition } from "../c-partition";

export const CPartitionLayout = () => {
  const [partitions, setPartitions] = useState([
    { id: 1, color: getRandomColor(), split: false },
  ]);

  const handleSplit = (id: number, direction: "V" | "H") => {
    setPartitions((prev) => {
      const partition = prev.find((p) => p.id === id);
      if (partition) {
        const newPartition = {
          id: prev.length + 1,
          color: getRandomColor(),
          split: false,
        };
        partition.split = true;
        return [...prev, newPartition];
      }
      return prev;
    });
  };

  const handleRemove = (id: number) => {
    setPartitions((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="relative w-full h-screen">
      {partitions.map((partition, index) => (
        <CPartition
          key={partition.id}
          color={partition.color}
          onSplit={(_, direction) => handleSplit(partition.id, direction)}
          onRemove={() => handleRemove(partition.id)}
          id={0}
          style={{}}
        />
      ))}
    </div>
  );
};

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
