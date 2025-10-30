import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaInicial from "./pages/TelaInicial";
import TelaJogo from "./pages/TelaJogo";

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/jogo" element={<TelaJogo />} />
    </Routes>
    </BrowserRouter>
  )
}

