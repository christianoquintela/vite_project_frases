import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './cadastro.css';
import axios from 'axios';
import { url } from '../../services/index';
import { useState } from 'react';

export default function Cadastro() {
    const [titulo, setTitulo] = useState('');
    const [frase, setFrase] = useState('');
    const [autor, setAutor] = useState('');

    const createFrase = () => {
        axios.post(` ${url}/cadastro`, { titulo, frase, autor }).then((res) => {
            console.log(res.data);
        });
        setTitulo('');
        setFrase('');
        setAutor('');
    };

    // if (!frase) return 'Sem frase!';
    return (
        <div className='container'>
            <Header />
            <section className="container_cad">
              <label>Titulo:</label>
                <input
                value={titulo}
                    type="text"
                    placeholder="titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Frase:</label>
                <input
                value={frase}
                    type="text"
                    placeholder="frase"
                    onChange={(e) => setFrase(e.target.value)}
                />
                <label>Autor da Frase:</label>
                <input
                value={autor}
                    type="text"
                    placeholder="autor"
                    onChange={(e) => setAutor(e.target.value)}
                />
                {/* <textarea name='frase' id='' cols='30' rows='10'></textarea> */}
            </section>
            <button onClick={createFrase} className='button'>Criando a frase!</button>

            <Footer />
        </div>
    );
}
