import { DndContext } from '@dnd-kit/core';

function App() {
  const handleDragEnd = (event) => {
    console.log(event);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* seus elementos arrastáveis aqui */}
    </DndContext>
  );
}