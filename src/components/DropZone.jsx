import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ id, label }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="drop-zone">
      <h3>{label}</h3>
    </div>
  );
}