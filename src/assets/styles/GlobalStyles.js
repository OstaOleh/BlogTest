import { createGlobalStyle } from "styled-components";
import Fonts from '../fonts/fonts';
import Reset from "./Reset";

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Reset}
`;