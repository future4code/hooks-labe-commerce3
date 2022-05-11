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
            {this.props.carrinho.map((produto)=>{
              return (
                <div>
                  <div>{produto.name}</div>
                  <div>{produto.value}</div>
                  <img src={produto.imageUrl}/>
                </div>
              )
            })}
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