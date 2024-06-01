import { useState } from "react";

function App() {
  const [linkIsShown, setLinkIsShown] = useState(false);

  const toggleShow = () => {
    debugger
    setLinkIsShown(!linkIsShown);
  };

  return (
    <>
      <button onClick={toggleShow}>Show link</button>
      {linkIsShown && <a href="https://google.com">Google</a>}
    </>
  );
}

export default App;
