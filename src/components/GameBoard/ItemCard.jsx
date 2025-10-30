import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import "./ItemCard.css";

export default function ItemCard({ item }) {
  const imgRef = useRef(null);

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "ITEM",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Usa a imagem original como preview
  useEffect(() => {
    if (imgRef.current) {
      preview(imgRef.current);
    }
  }, [preview]);

  return (
    <div
      ref={drag}
      className="item-card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {/* Imagem invisível para preview */}
      <img
        ref={imgRef}
        src={item.image}
        alt={item.name}
        style={{ width: "1px", height: "1px", opacity: 0 }}
      />

      {/* Imagem visível */}
      <img src={item.image} alt={item.name} className="item-image" />
      <p>{item.name}</p>
    </div>
  );
}