import './areaTexto.css'
interface PropsAreaTexto{
id: string;
titulo?: string;
frase: string;
autor?: string;
}
export default function AreaTexto({id, titulo, frase, autor}:PropsAreaTexto) {
  return(
    <div className='container_areaTexto'>
        <p>{id}</p>
        <p>{titulo}</p>
        <p>{frase}</p>
        <p>{autor}</p>
    </div>);
}
