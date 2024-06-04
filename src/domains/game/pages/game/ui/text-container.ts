import { TTheme } from "@/common/types/theme.type";
import styled from "@emotion/styled";

export const TextContainer = styled.div<{
  theme?: TTheme;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1500px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem 1.6rem;
  border-radius: 10px;
  gap: 10px;
`;
