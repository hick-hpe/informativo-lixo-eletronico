import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import ItemCard from './ItemCard';
import DropZone from './DropZone';
import { items } from '../data/items';
import '../styles/GameBoard.css';

export default function GameBoard() {
  const [score, setScore] = useState(0);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const item = items.find(i => i.id === active.id);

    if (over && item.type === over.id) {
      alert(`✅ Acertou! ${item.name} vai para ${over.id}`);
      setScore(prev => prev + 1);
    } else if (over) {
      alert(`❌ Errou! ${item.name} não vai para ${over.id}`);
    }
  };

  return (
    <div>
      <h2>Pontuação: {score}</h2>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="items">
          {items.map(item => (
            <ItemCard key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
        <div className="zones">
          <DropZone id="comum" label="Lixo Comum" />
          <DropZone id="reciclavel" label="Reciclável" />
          <DropZone id="especial" label="Ponto Especial" />
        </div>
      </DndContext>
    </div>
  );
}