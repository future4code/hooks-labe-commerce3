import React from 'react'
import Home from './components/Home'
import Produtos from './components/Produtos'
import Filtro from './components/Filtro'

export default function App() {
  return (
    <div className="App">
     <Home/>    
     <Produtos/>
     <Filtro/>
    </div>
  );
}
