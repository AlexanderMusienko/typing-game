import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const GameContainer = styled.div<{ theme?: TTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
