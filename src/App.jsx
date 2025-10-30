import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <h1>♻️ Jogo do Lixo Eletrônico</h1>
      <p>Arraste o item até a lixeira correta!</p>
      <GameBoard />
    </div>
  );
}

export default App;
