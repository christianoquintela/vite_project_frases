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

interface PropsInfos {
    id_frase?: string;
    titulo_frase?: string;
    frase: string;
    autor?: string;
}

const Home = () => {
    const [infos, setInfos] = useState<PropsInfos | null>();

    // useEffect(() => {
    //     axios.get(url).then((res) => {
    //         console.log(res.data);
    //         console.log(res.data.frase);
    //         setInfos(res.data);
    //     });
    //   }, []);

    const fraseDia = () => {
        axios.get(`${url}/1`).then((res) => {
            // console.log(res.data);
            // console.log(res.data.frase);
            setInfos(res.data);
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
                <button onClick={fraseDia}>Frase do dia</button>
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
