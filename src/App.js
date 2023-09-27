import React from 'react';
import './App.css'

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape'
import {BotaoTopo} from './componentes/BotaoTopo'

function App() {
  return (
    <div>
      <BotaoTopo />
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;