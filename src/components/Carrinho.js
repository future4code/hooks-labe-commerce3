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
            {this.props.carrinho.map((produto, i) => {
              return (
                <div key={i}>
                  <p>{produto.name}</p>
                </div>
                
              )
            }
          )
        }
                
           
          </div>
        </CarrinhoBody>
      </>
    )
  }
}
export default Carrinho;