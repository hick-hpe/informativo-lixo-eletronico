import React from "react";
import GameBoard from "../components/TelaJogo/GameBoard";
import "../assets/css/global.css";

export default function TelaJogo() {
  return (
    <div className="app">
      <div className="titulo-ctn">
        <h1 style={{fontSize: '60px'}}>♻️ Jogo do Lixo Eletrônico</h1>
        <p>Arraste o item até a lixeira correta!</p>
      </div>
      <GameBoard />
    </div>
  );
}