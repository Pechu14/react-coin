import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Coin() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(()=> {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
        .then(response => response.json())
        .then(data => setCoin(data.data))
        .catch(error => console.log("error en el fetch del Coin.jsx"))
    },[id]);

    if(!coin)
        return
        <p>buscando...</p>;

    return (
        <>
        <h2>{coin.name}</h2>
        <p>Price: ${coin.priceUsd}</p>
        <p>Rank: {coin.rank}</p>
        <p>Symbol: {coin.symbol}</p>
        <button onClick={()=> addFavorites(coin)}>añadir a favoritos</button>
        </>
    )
}

function addFavorites(coin){
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorites = favorites.some(favorite => favorite.id === coin.id) ?
    favorites.filter(favorite => favorite.id !== coin.id) :
    [...favorites, coin];
    localStorage.setItem('favorites',JSON.stringify(newFavorites));
}

export default Coin;