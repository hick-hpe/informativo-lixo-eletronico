import React from "react";
import GameBoard from "../components/TelaJogo/GameBoard";
import "../assets/css/global.css";

export default function TelaJogo() {
  return (
    <div className="app">
      <GameBoard />
    </div>
  );
}