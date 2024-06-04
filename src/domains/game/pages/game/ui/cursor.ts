import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const CursorKey = styled.span<{ theme?: TTheme; currentChar: string }>`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;
  font-weight: 600;
  background: ${({ currentChar, theme }) =>
    currentChar === " " ? theme.colors.accent : "none"};
`;
