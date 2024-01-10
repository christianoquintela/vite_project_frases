import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/Cadastro'>
        <button>Cadastro de frases</button>
      </Link>
    </header>
  );
}
