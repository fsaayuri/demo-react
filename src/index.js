import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
// é um css padrão aplicado que terá a mesma configuração em todas as pastas
import App from './App';
// a extensão final não é necessária | cada componente começa com maiúsculo


// cria uma constante criada root > função createRoot = pega um elemento que usa um id: "root" e cria um elemento para o react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    {/* Tem uma importação do arquivo <App/> mas dentro do index.js ele vira uma função, chama como se fosse uma tag html */}
    <App />
  </React.StrictMode>
  // força o desenvolvidor não esquecer algumas coisas (Carrega duas vezes como um refresh duplo antes de fazer qualquer mudança) | Todo componente no react tem um ciclo de vida (começa aparece carrega todo) depois que vc muda de página, algumas ações tem que tomar cuidado 
);

// Aparece dentro do root todos os arquivos que estão dentrodo App.js
