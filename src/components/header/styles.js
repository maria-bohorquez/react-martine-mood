import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./lookatmycat.svg";

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 750px;
  width: 100%;
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
  justify-content: center;
  padding: 30px;
`;
