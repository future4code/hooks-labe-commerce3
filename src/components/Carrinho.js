import React from 'react'
import styled from 'styled-components';

const CarrinhoBody = styled.div`
width: 170px;
display: flex;
flex-direction: column;
padding: 10px;
border: 1px solid black;
`
class Carrinho extends React.Component{
  render(){
    return(
      <>
        <CarrinhoBody>
          <h3>Carrinho</h3>
          <div>
            <p>Quantidade</p>
            <p>Produto 1</p>
            <button>Remover do Carrinho</button>
          </div>
          <div>
            <p>Quantidade</p>
            <p>Produto 2</p>
            <button>Remover do Carrinho</button>
          </div>
        </CarrinhoBody>
      </>
    )
  }
}
export default Carrinho;