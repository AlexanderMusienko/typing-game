import { useStores } from "@/common/hooks/use-stores";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CursorKey } from "./ui/cursor";

const DEAFULT_TEXT =
  "Raskolnikov was already entering the room. He came in looking as though he had the utmost difficulty not to burst out laughing again. Behind him Razumihin strode in gawky and awkward, shamefaced and red as a peony, with an utterly crestfallen and ferocious expression. His face and  whole figure really were ridiculous at that moment and amply justified Raskolnikov's laughter.";

export const Game = observer(() => {
  const {
    appStore: { currentTheme },
  } = useStores();

  useEffect(() => {
    console.log(toJS(currentTheme));
  }, [currentTheme]);

  const [text, setText] = useState(DEAFULT_TEXT);
  const [textBeforeCursor, setTextBeforeCursor] = useState("");
  const [textAfterCursor, setTextAfterCursor] = useState(DEAFULT_TEXT.slice(1));
  const [cursorChar, setCursorChar] = useState(DEAFULT_TEXT[0]);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [wrongButtonsCount, setWrongButtonsCount] = useState(0);

  const removeTextBeforeCursor = () => {
    return text.slice(cursorPosition + 1);
  };

  const checkPressedButton = (e: KeyboardEvent) => {
    if (e.key === text[cursorPosition]) {
      console.log("Right button");
      setCursorPosition(cursorPosition + 1);
    } else {
      setWrongButtonsCount(wrongButtonsCount + 1);
    }
  };

  useEffect(() => {
    setTextBeforeCursor(text.slice(0, cursorPosition));
    setTextAfterCursor(removeTextBeforeCursor());
    setCursorChar(text[cursorPosition]);

    console.log(cursorPosition);
  }, [cursorPosition]);

  useEffect(() => {
    document.addEventListener("keydown", checkPressedButton);
    return () => {
      console.log("Clear effect");
      document.removeEventListener("keydown", checkPressedButton);
    };
  }, [checkPressedButton]);

  return (
    <main>
      <h1>Game</h1>
      <p>
        <span style={{ color: "green" }}>{textBeforeCursor}</span>
        <CursorKey currentChar={cursorChar}>{cursorChar}</CursorKey>
        {textAfterCursor}
      </p>
      <p>Right buttons count: {cursorPosition}</p>
      <p>Wrong buttons count: {wrongButtonsCount}</p>
    </main>
  );
});
