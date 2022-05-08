import React from 'react'

class Filtro extends React.Component{
  render(){
    return(
      <>
        <h3>Filtros</h3>
          <label>Valor mínimo:</label>
          <input type="number" value=""/>
          <label>Valor máximo:</label>
          <input type="number" value=""/>
          <label>Busca por nome:</label>
          <input type="text" value=""/>
      </>
    )
  }
}
export default Filtro;