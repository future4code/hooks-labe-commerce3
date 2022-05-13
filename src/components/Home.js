import React from 'react'
import styled from 'styled-components';
import Carrinho from './Carrinho';

//Estilização Body do Home.js
const HomeBody = styled.div`
display: flex;
width: 100%;
`
// Estilização Grade dos produtos 
const ProdutosHomeGrade = styled.div`
width: 70%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 20px;
padding: 10px;
margin: 0 auto;
`
const ProdutosHomeCard = styled.div`
box-shadow: 0 0 10px rgba(0,0,0,0.6);
-webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
padding-bottom: 10px;
background-color: white;
height: 37vh;
`
const TextoCard = styled.p`
display: flex;
justify-content: center;
margin-top: 10px;
font-size: 12pt;
`
const ImgCard = styled.img`
width: 100%;
height: 70%;
`
const ButtonCard = styled.button`
display: flex;
margin: 0 auto;
margin-top: 7px;
`

const SectionProdutos = styled.div`
display: flex;
flex-direction: column;
margin-left: 7px;
margin-top: 5px;
gap: 5px;
`

class Home extends React.Component{
  
  state = {
    ordem : 'crescente',
    carrinho : [] 
  }

  addProduto = () => {
    return this.props.produtos.map((produto) => {
      const nomeProduto = {name : produto.name}
      const NovoCarrinho = [...this.state.carrinho, nomeProduto]
      this.setState({carrinho : NovoCarrinho})
      console.log(this.state.carrinho)
      }
    )
  }

  onChangeOrdem = (event) => {
    this.setState({ordem : event.target.value})
  }

  renderizarTela = () => {
    if (this.state.ordem === 'crescente') {
        return this.props.produtos.map((produto,i) => {
          return <ProdutosHomeCard key={i}>
                    <ImgCard src={produto.imageUrl}/>
                    <TextoCard><b>{produto.name}</b></TextoCard>
                    <TextoCard><b>R$: {produto.value}</b></TextoCard>
                    <ButtonCard onClick={this.addProduto}>Adicionar ao carrinho</ButtonCard>
                  </ProdutosHomeCard> 
          }
        )
      }
      
      else if (this.state.ordem === 'decrescente') {
        const desc = this.props.produtos.reverse()
        return desc.map((prod, i) => {
            return <ProdutosHomeCard key={i}>
                      <ImgCard src={prod.imageUrl}/>
                      <TextoCard >{prod.name}</TextoCard>
                      <TextoCard ><b>R$: {prod.value}</b></TextoCard>
                      <ButtonCard onClick={this.addProduto}>Adicionar ao carrinho</ButtonCard>
                    </ProdutosHomeCard>
          }
        )
      }  
    }

  render(){
    return(
      <HomeBody>
        <SectionProdutos>
          <h3>Produtos</h3>
          <p>Preço dos produtos</p>
          <label>Ordem: </label>
          <select value={this.state.ordem} onChange={this.onChangeOrdem}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </SectionProdutos>
          <ProdutosHomeGrade>
            {this.renderizarTela()}
          </ProdutosHomeGrade>

          <Carrinho
            carrinho={this.state.carrinho}
          />
      </HomeBody>
    )
  }
}
export default Home;