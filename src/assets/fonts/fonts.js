import { css } from 'styled-components';
import IBMPlexMono from './IBMPlexMono-Regular.ttf';
import DrukWide from './DrukWide-Heavy-Reduced.ttf';

export default css`
  @font-face {
    font-family: 'IBMPlexMono';
    src: url(${IBMPlexMono}) format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'DrukWide';
    src: url(${DrukWide}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }
`;