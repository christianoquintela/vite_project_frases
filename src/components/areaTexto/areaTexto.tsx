import './areaTexto.css';
interface PropsAreaTexto {
    id: string;
    titulo?: string;
    frase: string;
    autor?: string;
}
export default function AreaTexto({
    id,
    titulo,
    frase,
    autor,
}: PropsAreaTexto) {
    const display0 = id === 'undefined' ? 'none' : '';
    const display1 = titulo === 'undefined' ? 'none' : '';
    const display2 = frase === 'undefined' ? 'none' : '';
    const display3 = autor === 'undefined' ? 'none' : '';

    return (
        <div className="container_areaTexto">
            <p style={{ display: `${display0}` }}>{id}</p>
            <p style={{ display: `${display1}` }}>{titulo}</p>
            <p style={{ display: `${display2}` }}>{frase}</p>
            <p style={{ display: `${display3}` }}>{autor}</p>
        </div>
    );
}
