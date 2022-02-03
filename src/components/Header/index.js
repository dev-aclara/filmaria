
import './header.css';
import {Link} from 'react-router-dom';

export default function Header (){
    return(
        <div className="header">
            <header>
            <Link className='logo' to='/'>Filmaria</Link>
            <Link className='favoritos' to='/'>Salvos</Link>
            </header>
        </div>
    )
}