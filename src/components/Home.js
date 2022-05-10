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
height: 90%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 20px;
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
height: 70%;
`
const ButtonCard = styled.button`
display: flex;
margin: 0 auto;
margin-top: 10px;
`

class Home extends React.Component{
  
  state = {
    ordem : 'crescente',
    carrinho : [],
    produtos : [{
      id: 1,
      name: "Samba canção Astronauta",
      value: 30.99,
      imageUrl: "https://img.lojasrenner.com.br/item/552271167/zoom/11.jpg",
    },
    
    {
      id: 2,
      name: "Camisa infantil Espaço",
      value: 35.99,
      imageUrl: "https://img.lojasrenner.com.br/item/601193522/large/1.jpg",
    },
  
    {
      id: 3,
      name: "Camiseta UFO",
      value: 45.69,
      imageUrl: "https://img.lojasrenner.com.br/item/549031453/zoom/5.jpg",
    },
  
    {
      id: 4,
      name: "Camiseta OVNI",
      value: 45.69,
      imageUrl: "https://img.lojasrenner.com.br/item/559705010/zoom/10.jpg",
    },
  
    {
      id: 5,
      name: "Camiseta Galáxia",
      value: 60.99,
      imageUrl: "https://img.lojasrenner.com.br/item/553182297/zoom/10.jpg",
    },
  
    {
      id: 6,
      name: "Camiseta Espacial",
      value: 70.11,
      imageUrl: "https://img.lojasrenner.com.br/item/558567292/zoom/10.jpg",
    },
  
    {
      id: 7,
      name: "Moletom Black Hole",
      value: 130.99,
      imageUrl: "https://img.elo7.com.br/product/original/2E444E6/moletom-com-capuz-unissex-galaxia-nebulosa-md03-buraco-negro.jpg",
    },
  
    {
      id: 8,
      name: "Moletom Abdução",
      value: 130.99,
      imageUrl: "https://images-americanas.b2w.io/produtos/2773101719/imagens/blusa-moletom-full-alien-nave-espacial/2773101735_1_large.jpg",
    },]
  }

  renderizarTela = () => {
    if (this.state.ordem === 'crescente') {
        return this.state.produtos.map((produto,index) => {
          return <ProdutosHomeCard key={index}>
                    <ImgCard src={produto.imageUrl}/>
                    <TextoCard>{produto.name}</TextoCard>
                    <TextoCard><strong>R$: {produto.value}</strong></TextoCard>
                    <ButtonCard>Adicionar ao carrinho</ButtonCard>
                  </ProdutosHomeCard> 
          }
        )
      }
      
      else if (this.state.ordem === 'decrescente') {
        const desc = this.state.produtos.reverse()
        return desc.map((prod, i) => {
            return <ProdutosHomeCard key={i}>
                      <ImgCard src={prod.imageUrl}/>
                      <TextoCard >{prod.name}</TextoCard>
                      <TextoCard ><strong>R$: {prod.value}</strong></TextoCard>
                      <ButtonCard>Adicionar ao carrinho</ButtonCard>
                    </ProdutosHomeCard>
          }
        )
      }  
    }

onChangeOrdem = (event) => {
    this.setState({ordem : event.target.value})
  }

  render(){
    console.log(this.state.ordem)
    return(
      <HomeBody>
        <div>
          <h3>Produtos</h3>
          <p>Preço dos produtos</p>
          <label>Ordem: </label>
          <select value={this.state.ordem} onChange={this.onChangeOrdem}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </div>
          <ProdutosHomeGrade>
            {this.renderizarTela()}
          </ProdutosHomeGrade>
      </HomeBody>
    )
  }
}
export default Home;