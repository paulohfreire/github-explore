import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px; // Largura do elemento na exibição
    line-height: 56px;  // espaçamento entre linhas
    margin-top: 80px;  // Distancia do elemento para o topo ou para o elemento de cima

`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px; // ver o layout - la tem 712px. bom parametro para utilizar
    display: flex; //forçar que fique um do lado do outro input e button

input {
    flex: 1;  //input ocupa todo o tamanho do max-width menos o botão
    height: 70px;
    padding: 0 24px;
    border: 0;  // retira as linhas de borda
    border-radius: 5px 0 0 5px; //da esquerda - direita - direita de baixo - esquerda de baixo
    color: #3a3a3a;
    border: 2px solid #FFF;

    ${(props) => props.hasError && css`    //estilizando o campo de busca quando da erro. borda avermelhada
        border-color: #c53030;
    `}

    &::placeholder{
        color: #a8a8b3;  //clarear o texto do input (digite o nome do repositório)
    }
};

button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;  // perceba que para arredondar os dois cantos do botao do lado direito é o inverso do que foi aplicado no input
    border: 0;
    color:#FFF; // cor do texto
    font-weight: bold; // negrito para o texto
    transition: background-color 0.2s;
&:hover {    // se botar o & as regras de estilização sao aplicadas nesse button em específico
    background: ${shade(0.2, '#04d361')}; // usar o JS no css é colocar o $ {()};
}
}
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;


export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex; //um elemento ficar ao lado do outro
    align-items: center; // alinhados ao eixo principal
    transition: transform 0.2s;

    & + a {       // para estilizar lista de elementos a sem que o primeiro seja alterado, só o que seguirem após ele
      margin-top: 16px;   //Nesse caso será aplicada margin top para distanciar os elementos listados
    }

    &:hover {
      transform: translateX(10px);

    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; // deixa circular
    }

    div {
      margin: 0 16px; // distanciar o texto em relacao a imagem
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

    }   // perceba o encadeamento de estilização dos elementos dentro da div

    svg {   //para ajustar o FiChevronRight (a setinha para a direita)
      margin-left: auto;
      color: #cbcbd6;
    }

`;
