import { useEffect, useState } from 'react';
import './home.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  
  useEffect(()=>{

    async function loadFilmes(){
        const response = await api.get('r-api/?api=filmes')
        // console.log(response.data);
        setFilmes(response.data);
    }

    loadFilmes();

  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <strong> {filme.nome} </strong>
                <img src={filme.foto} alt={filme.nome} />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article> 
          )
        })}
      </div>
    </div>
  );
 }