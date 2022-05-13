import React from 'react'
import GlobalStyles from "./GlobalStyles";
import Home from './components/Home'
import Filtro from './components/Filtro'
import styled from 'styled-components';

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const Header = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
height: 15vh;
background:linear-gradient(to right, cyan, darkblue); 
`
const TituloH1 = styled.h1`
display: flex;
height: 50%;
align-items: center;
margin: 0 auto;
margin-top: 40px;
color: white;
padding: 10px;
`
const ImgHeader = styled.img`
width: 10%;
`
const Footer = styled.div`
width: 100%;
height: 10vh;
background-color: black;
`
const FooterP = styled.p`
text-align: center;
padding: 5px;
color: white;
`
const produtos = [{
  id: 1,
  name: "Calção Astronauta",
  value: 30.99,
  imageUrl: "https://img.lojasrenner.com.br/item/552271167/zoom/11.jpg",
},

{
  id: 2,
  name: "Camisa Espaço",
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
  name: "Moletom Galáxia",
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
        <Header>
          <TituloH1>Space Store</TituloH1>
          <ImgHeader src='https://img.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg?t=st=1652475436~exp=1652476036~hmac=15ca76a427963223a3e1c192eb3b762d503db3a34ef8914e25bda30384e06a45&w=826'/>
        </Header>
          <Body>
            <GlobalStyles/>
            <Home
              produtos={produtos}
            />    
            <Filtro/>
          </Body>
        <Footer>
          <FooterP>Copyright © 2022 Todos direitos reservados.</FooterP>
          <FooterP>Desenvolvido por Diogo - Leandro - Mizael</FooterP>
        </Footer>
      </>
    )
  }
}
export default App;