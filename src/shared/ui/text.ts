import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const Text = styled.span<{
  theme?: TTheme;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
}>`
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  line-height: ${({ lineHeight }) => lineHeight || "unset"};
`;
