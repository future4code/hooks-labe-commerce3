import React from 'react'
import styled from 'styled-components';

const HomeBody = styled.div`
display: flex;
width: 100%;
height: 70vh;
border: 1px solid black;
`

class Home extends React.Component{
  render(){
    return(
      <HomeBody>
        <div>
          <h3>Produtos</h3>
          <p>Quantidade de produtos</p>
          <label>Ordem:</label>
          <select>
            <option value="CRESCENTE">Crescente</option>
            <option value="DECRESCENTE">Decrescente</option>
          </select>
        </div>
        <div>
          <div>
            <img src="https://picsum.photos/200/300"/>
            <img src="https://picsum.photos/200/299"/>
          </div>
        </div>
      </HomeBody>
    )
  }
}
export default Home;