import AreaTexto from '../../components/areaTexto/areaTexto';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './home.css';

import axios from 'axios';

const url = 'http://localhost:8080';

const Home = () => {

  axios.post(url,{})//Continuar amanhar a partir daqui!
  return (
    <div className='container_home'>
      <Header />
<main className='container_main'>
  <AreaTexto id={`${}`} titulo={`${}`} frase={`${}`} autor={`${}`} />
  <button>Frase do dia</button>
  <button>Frase do dia StarWars</button>
  <button>Dica de programação</button>
  <button>Emoji do dia</button>
  <button>Comentários:</button>

      
</main>
      
      <Footer />
    </div>
  );
};

export default Home;
