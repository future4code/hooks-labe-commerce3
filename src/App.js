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

class App extends React.Component {
  render() {
    return (
      <>
        <Body>
          <GlobalStyles/>
          <Home/>    
          <Carrinho/>
          <Filtro/>
        </Body>
      </>
    )
  }
}
export default App;
