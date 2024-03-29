import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Cadastro from '../pages/cadastro/cadastro';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Cadastro' Component={Cadastro} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

/* 
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const [count, setCount] = useState(0)
import viteLogo from '/vite.svg'
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/
