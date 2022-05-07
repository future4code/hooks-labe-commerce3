import React from 'react'

class Carrinho extends React.Component{
  render(){
    return(
      <>
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
      </>
    )
  }
}
export default Carrinho;