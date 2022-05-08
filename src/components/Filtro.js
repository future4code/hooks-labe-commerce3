import React from 'react'
import styled from 'styled-components';

const FiltroBody = styled.div`
width: 170px;
display: flex;
flex-direction: column;
padding: 10px;
border: 1px solid black;
`

class Filtro extends React.Component{
  render(){
    return(
      <>
        <FiltroBody>
          <h3>Filtros</h3>
            <label>Valor mínimo:</label>
            <input type="number" value=""/>
            <label>Valor máximo:</label>
            <input type="number" value=""/>
            <label>Busca por nome:</label>
            <input type="text" value=""/>
        </FiltroBody>
      </>
    )
  }
}
export default Filtro;