import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import '../styles/ItemCard.css';

export default function ItemCard({ id, name }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="item-card"
    >
      {name}
    </div>
  );
}