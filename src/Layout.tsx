import React, { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}
const LayoutComponent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutComponent>{children}</LayoutComponent>;
};
