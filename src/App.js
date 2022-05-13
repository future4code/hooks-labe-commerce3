import React from 'react'
import GlobalStyles from "./GlobalStyles";
import Home from './components/Home'
import Carrinho from './components/Carrinho'
import Filtro from './components/Filtro'
import styled from 'styled-components';

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const produtos = [{
  id: 1,
  name: "Calção Astronauta",
  value: 30.99,
  imageUrl: "https://img.lojasrenner.com.br/item/552271167/zoom/11.jpg",
},

{
  id: 2,
  name: "Camisa infantil Espaço",
  value: 35.99,
  imageUrl: "https://img.lojasrenner.com.br/item/601193522/large/1.jpg",
},

{
  id: 3,
  name: "Camiseta UFO",
  value: 45.69,
  imageUrl: "https://img.lojasrenner.com.br/item/549031453/zoom/5.jpg",
},

{
  id: 4,
  name: "Camiseta OVNI",
  value: 45.69,
  imageUrl: "https://img.lojasrenner.com.br/item/559705010/zoom/10.jpg",
},

{
  id: 5,
  name: "Camiseta Galáxia",
  value: 60.99,
  imageUrl: "https://img.lojasrenner.com.br/item/553182297/zoom/10.jpg",
},

{
  id: 6,
  name: "Camiseta Espacial",
  value: 70.11,
  imageUrl: "https://img.lojasrenner.com.br/item/558567292/zoom/10.jpg",
},

{
  id: 7,
  name: "Moletom Black Hole",
  value: 130.99,
  imageUrl: "https://img.elo7.com.br/product/original/2E444E6/moletom-com-capuz-unissex-galaxia-nebulosa-md03-buraco-negro.jpg",
},

{
  id: 8,
  name: "Moletom Abdução",
  value: 131.99,
  imageUrl: "https://images-americanas.b2w.io/produtos/2773101719/imagens/blusa-moletom-full-alien-nave-espacial/2773101735_1_large.jpg",
},]


class App extends React.Component {

  render() {
    
    return (
      <>
        <Body>
          <GlobalStyles/>
          <Home
            produtos={produtos}
          />    
          <Filtro/>
        </Body>
      </>
    )
  }
}
export default App;