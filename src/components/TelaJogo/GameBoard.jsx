import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ItemCard from "./ItemCard";
import DropZone from "./DropZone";
import CustomDragLayer from "./CustomDragLayer";
import { items } from "../../data/items";
import "../../assets/css/GameBoard.css";

const categories = [
  { type: "eletronico", name: "Lixo Eletrônico" },
  { type: "papel", name: "Papel" },
  { type: "plastico", name: "Plástico" },
  { type: "metal", name: "Metal" },
  { type: "organico", name: "Orgânico" },
  { type: "vidro", name: "Vidro" },
];

export default function GameBoard() {
  const [availableItems, setAvailableItems] = useState(items);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleDrop = (item, categoryType) => {
    if (item.type === categoryType) {
      setAcertos((prev) => prev + 1);
      alert(`✅ ${item.name} colocado corretamente!`);
    } else {
      setErros((prev) => prev + 1);
      alert(`❌ ${item.name} colocado na categoria errada!`);
    }

    setAvailableItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleMostrarResultados = () => setMostrarResultados(true);
  const handleReiniciar = () => {
    setAvailableItems(items);
    setAcertos(0);
    setErros(0);
    setMostrarResultados(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-board">
        {/* Título informativo */}
        <div className="titulo-ctn">
          <h1 style={{ fontSize: '60px' }}>♻️ Jogo do Lixo Eletrônico</h1>
        </div>
        
        <h2>Aprenda a separar corretamente os resíduos!</h2>

        <div className="items-container">
          {availableItems.length > 0 ? (
            availableItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))
          ) : (
            <p>🎉 Todos os itens foram classificados!</p>
          )}
        </div>

        <div className="dropzones-container">
          {categories.map((cat) => (
            <DropZone key={cat.type} category={cat} onDrop={handleDrop} />
          ))}
        </div>
      </div>

      <div className="buttons-container">
        <button onClick={handleMostrarResultados} className="btn-resultado">
          📊 Exibir Resultados
        </button>
        <button onClick={handleReiniciar} className="btn-reiniciar">
          🔄 Reiniciar
        </button>
      </div>

      {mostrarResultados && (
        <div className="popup">
          <div className="popup-content">
            <h2>📋 Resultados</h2>
            <p>✅ Acertos: {acertos}</p>
            <p>❌ Erros: {erros}</p>
            <p>🧩 Itens restantes: {availableItems.length}</p>
            <button onClick={() => setMostrarResultados(false)}>Fechar</button>
          </div>
        </div>
      )}

      <CustomDragLayer />
    </DndProvider>
  );
}