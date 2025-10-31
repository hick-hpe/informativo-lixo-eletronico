import React from "react";
import { useDrop } from "react-dnd";
import "../../assets/css/DropZone.css";

export default function DropZone({ category, onDrop }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item, category.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="drop-zone"
      style={{ backgroundColor: isOver ? "#c8facc" : "#f0f0f0" }}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
