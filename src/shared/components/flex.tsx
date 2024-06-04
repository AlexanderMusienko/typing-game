import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface FlexContainerProps {
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  flexDirection?: TFlexDirection;
  justifyItems?: TJustifyItems;
  alignSelf?: TAlignSelf;
  gap?: string;
  flex?: string;
  marginBottom?: string;
}

type TFlexProps = {
  children?: ReactNode;
} & FlexContainerProps &
  HTMLAttributes<HTMLDivElement>;

export type TJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end";

export type TAlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"
  | "start"
  | "end"
  | "space-between";

export type TJustifyItems =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"
  | "space-between";

export type TFlexDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type TAlignSelf = "end" | "start" | "center";

const FlexWrapper = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  justify-items: ${({ justifyItems }) => justifyItems || "start"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ gap }) => gap || "0"};
  flex: ${({ flex }) => flex};
  position: relative;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  align-self: ${({ alignSelf }) => alignSelf || "unset"};
`;

export const Flex: FC<TFlexProps> = ({ children, ...props }) => {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
};
