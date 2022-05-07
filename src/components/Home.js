import React from 'react'


class Home extends React.Component{
  render(){
    return(
      <div>
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
      </div>
    )
  }
}
export default Home;