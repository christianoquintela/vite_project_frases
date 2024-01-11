//Components
import AreaTexto from '../../components/areaTexto/areaTexto';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
//Css
import './home.css';
//Libs
import axios from 'axios';
import { url } from '../../services/index';
import { useState } from 'react';
//Interface
interface PropsInfos {
    id_frase?: string;
    titulo_frase?: string;
    frase: string;
    autor?: string;
}
//Função principal
const Home = () => {
    const [infos, setInfos] = useState<PropsInfos | null>();

    //FraseDia
    const fraseDia = () => {
        axios.get(`${url}/`).then((res) => {
            // console.log(res.data);
            // console.log(res.data.frase);
            setInfos(res.data);
        });
    };
    //FraseStar
    const fraseNorris = () => {
        //site base https://api.chucknorris.io/
        const url_Norris = 'https://api.chucknorris.io/jokes/random';
        axios.get(url_Norris).then((res) => {
            // console.log(res.data.value);
            const frase = res.data.value;
            const dados = {
                titulo_frase: 'Chuck Norris facts.',
                frase: frase,
                autor: 'Chuck Norris',
            };
            // console.log(dados);
            setInfos(dados);
        });
    };
    //Conselhos
    const advices = () => {
        //https://api.adviceslip.com/advice
        const url_Advice = 'https://api.adviceslip.com/advice';
        axios.get(url_Advice).then((res) => {
            // console.log(res.data.slip);
            const frase = res.data.slip;
            const dados = {
                id_frase: frase.id,
                frase: frase.advice,
                autor: 'Advice Slip JSON API',
            };
            console.log(dados);
            setInfos(dados);
        });
    };
    return (
        <div className="container_home">
            <Header />
            <main className="container_main">
                <AreaTexto
                    id={`${infos?.id_frase}`}
                    titulo={`${infos?.titulo_frase}`}
                    frase={`${infos?.frase}`}
                    autor={`${infos?.autor}`}
                />
                <div className='buttons'>
                    <button onClick={fraseDia}>Frases aleatórias cadastradas</button>
                    <button onClick={fraseNorris}>Frases Chuck Norris</button>
                    <button onClick={advices}>Conselhos</button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
