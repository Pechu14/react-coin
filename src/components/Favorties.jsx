import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function GetFavorites(){
    const [ favorites, setFavorites] = useState([])


    useEffect(()=> {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites)
    },[]);

    if(favorites.length === 0)
        return
    <p>No hay favoritos guardados</p>

    return (
        <>
        <h1>Crytomonedas favoritas</h1>
        <ul>
            {favorites.map(coin =>(
                <li key={coin.id}>
                    <Link to= {`/coin/${coin.id}`}>{coin.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default GetFavorites;