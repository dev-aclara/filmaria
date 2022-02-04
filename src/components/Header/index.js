import { BiMoviePlay } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header (){
    return(
        <div className="header">
            <header>
            <Link className='logo' to='/'>
                <BiMoviePlay /> 
            </Link>
            <h1>Filmaria</h1>
            <Link className='favoritos' to='/favoritos'>
                <GoChecklist />
            </Link>
            </header>
        </div>
    )
}