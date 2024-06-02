import { HashRouter, Route, Routes } from "react-router-dom";
import { Game } from "./domains/game/pages/game";
import "./common/stores/root.store";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
