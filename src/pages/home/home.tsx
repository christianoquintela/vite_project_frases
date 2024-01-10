import AreaTexto from '../../components/areaTexto/areaTexto';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './home.css';

const Home = () => {
  return (
    <div className='container_home'>
      <Header />
<main className='container_main'>
  <AreaTexto id={`${}`} titulo={`${}`} frase={`${}`} autor={`${}`} />
  <button>Frase do dia</button>
  <button>Frase do dia StarWars</button>
  <button>Dica de programação</button>
  <button>Emoji do dia</button>
  <button>Comentarios:</button>

      
</main>
      
      <Footer />
    </div>
  );
};

export default Home;
