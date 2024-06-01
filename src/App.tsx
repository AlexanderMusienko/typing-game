import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Game } from "./domains/game/pages/game";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
