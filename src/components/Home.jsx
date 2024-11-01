import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'



function Home() {
    const [listCoin, setListCoin] = useState([])
 
    useEffect(()=>{
        fetch('https://api.coincap.io/v2/assets/')
        .then(response => response.json())
        .then(data => setListCoin(data.data))
        .catch(error => console.log("Error en el fetch linea 11"))
    },[])

    return (
        <>
        <h1>Lista de Crytomonedas</h1>
        <ul>
            {listCoin.map(coin => (
                <li key={coin.id}>
                    <Link to={`coin/${coin.id}`}>{coin.name}</Link>
                    <p>{coin.name}</p>
                    <p>{coin.priceUsd} $</p>
                </li>
            ))}
        </ul>
        </>
    )

};


export default Home;
