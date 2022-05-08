import React from 'react'
import GlobalStyles from "./GlobalStyles";
import Home from './components/Home'
import Carrinho from './components/Carrinho'
import Filtro from './components/Filtro'


class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles/>
        <Home/>    
        <Carrinho/>
        <Filtro/>
      </>
    )
  }
}
export default App;
