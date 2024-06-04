import { useStores } from "@/common/hooks/use-stores";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CursorKey } from "./ui/cursor";
import { Text } from "@/shared/ui/text";
import { GameContainer } from "./ui/game-container";
import { PageWrapper } from "@/shared/ui/page-wrapper";
import { TextContainer } from "./ui/text-container";
import { TextForTyping } from "./ui/text-for-typing";

const DEAFULT_TEXT =
  "Raskolnikov was already entering the room. He came in looking as though he had the utmost difficulty not to burst out laughing again. Behind him Razumihin strode in gawky and awkward, shamefaced and red as a peony, with an utterly crestfallen and ferocious expression. His face and  whole figure really were ridiculous at that moment and amply justified Raskolnikov's laughter.";

const IGNORE_KEYS = ["Shift", "Control", "Alt", "CapsLock", "Tab", "Backspace"];

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
    // console.log(e);
    if (e.key === text[cursorPosition]) {
      setCursorPosition(cursorPosition + 1);
    } else if (!IGNORE_KEYS.includes(e.key)) {
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
    <PageWrapper>
      <GameContainer>
        <TextContainer>
          <TextForTyping>
            <Text fontSize="inherit" color={currentTheme.colors.success}>
              {textBeforeCursor}
            </Text>
            <CursorKey currentChar={cursorChar}>{cursorChar}</CursorKey>
            <Text fontSize="inherit" color={currentTheme.colors.primary}>
              {textAfterCursor}
            </Text>
          </TextForTyping>
        </TextContainer>
      </GameContainer>
    </PageWrapper>
  );
});
