
import React from 'react';
import ProjectCarousel from './components/Carrossel/Carousel';
import Header from './components/Cabecalho/Header';
import './App.css'
import './reset.css'

const projects = [
  {
    mainImage: './src/assets/images/Malenia, portrait.jpg',
    photo: 'https://via.placeholder.com/50',
    title: 'Projeto 1',
    architect: 'Arquiteto 1',
    link: 'https://example.com/projeto1',
  },
  {
    mainImage: './src/assets/images/Icon — Baba Yaga_.jpg',
    photo: 'https://via.placeholder.com/50',
    title: 'Projeto 2',
    architect: 'Arquiteto 2',
    link: 'https://example.com/projeto2',
  },
  // Adicione mais projetos conforme necessário
];

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <h1>Portfólio de Arquitetura</h1>
      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default App;

