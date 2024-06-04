import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const NavbarContainer = styled.div<{ theme?: TTheme }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;
