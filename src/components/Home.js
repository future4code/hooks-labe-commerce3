import React from 'react'
import styled from 'styled-components';

//Estilização Body do Home.js
const HomeBody = styled.div`
display: flex;
width: 100%;
`
// Estilização Grade dos produtos 
const ProdutosHomeGrade = styled.div`
width: 80%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 50px;
padding: 10px;
`
const ProdutosHomeCard = styled.div`
box-shadow: 0 0 10px rgba(0,0,0,0.6);
-webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
padding-bottom: 10px;
`
const TextoCard = styled.p`
display: flex;
justify-content: center;
margin-top: 10px;
`
const ImgCard = styled.img`
width: 100%;
`
const ButtonCard = styled.button`
display: flex;
margin: 0 auto;
margin-top: 10px;
`

class Home extends React.Component{
  
  state = {
    produtos : [{
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/04/02/1648866215a00dd8063a420616a6fa0cce0158e92b_thumbnail_600x.webp",
    },
    
    {
      id: 2,
      name: "Foguete da Missão Apollo 12",
      value: 12000.0,
      imageUrl: "https://picsum.photos/200/201",
    },
  
    {
      id: 3,
      name: "Foguete da Missão Apollo 13",
      value: 10400.0,
      imageUrl: "https://picsum.photos/200/202",
    },
  
    {
      id: 4,
      name: "Foguete da Missão Apollo 14",
      value: 20000.0,
      imageUrl: "https://picsum.photos/200/203",
    },
  
    {
      id: 5,
      name: "Foguete da Missão Apollo 15",
      value: 10550.0,
      imageUrl: "https://picsum.photos/200/204",
    },
  
    {
      id: 6,
      name: "Foguete da Missão Apollo 16",
      value: 101230.0,
      imageUrl: "https://picsum.photos/200/205",
    },
  
    {
      id: 7,
      name: "Foguete da Missão Apollo 17",
      value: 101200.0,
      imageUrl: "https://picsum.photos/200/206",
    },
  
    {
      id: 8,
      name: "Foguete da Missão Apollo 18",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/207",
    },]
  }

  retornarProdutos = this.state.produtos.map((produto) => {
    return <ProdutosHomeCard>
              <ImgCard src={produto.imageUrl}/>
              <TextoCard >{produto.name}</TextoCard>
              <TextoCard ><strong>R$: {produto.value}</strong></TextoCard>
              <ButtonCard onClick={this.adicionarCarrinho}>Adicionar ao carrinho</ButtonCard>
           </ProdutosHomeCard> 
  })

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
          <ProdutosHomeGrade>
            {this.retornarProdutos}
          </ProdutosHomeGrade>
      </HomeBody>
    )
  }
}
export default Home;