import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const Text = styled.span<{ theme?: TTheme }>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 600;
`;
