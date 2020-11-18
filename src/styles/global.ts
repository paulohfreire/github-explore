import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body {
   background: #f0f0f5 url(${ githubBackground }) no-repeat 70% top;  //usar a img no backgroun, no-repeat para ela não repetir na tela, 70% para alinhar mais a direita e top para ajustara a img pelo topo da pagina
    -webkit-font-smoothing: antialiased;  //Para dar um detalhe melhor na fonte
  }
  body, input, button {
    font: 16px Roboto, sans-serif;  //importar a fonte no index.html pelo google fonts
  }
  #root {
    max-width: 960px;  //dar responsividade a tela
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;   //o curso mudar ao passar por um elemento clicável
  }

`;
