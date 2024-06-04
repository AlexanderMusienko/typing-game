import { HashRouter, Route, Routes } from "react-router-dom";
import { Game } from "./domains/game/pages/game";
import "./common/stores/root.store";
import { Global, ThemeProvider, css } from "@emotion/react";
import { useStores } from "./common/hooks/use-stores";
import { normalizeCSS, resetCSS } from "./common/utils/style";

const App = () => {
  const {
    appStore: { currentTheme },
  } = useStores();
  return (
    <ThemeProvider theme={currentTheme}>
      <Global styles={css(resetCSS, normalizeCSS(currentTheme))} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
