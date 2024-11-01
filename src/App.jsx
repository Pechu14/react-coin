import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './components/Root';
import Home from './components/Home';
import Coin from './components/Coin';
import GetFavorites from './components/Favorties';




function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element ={<Home />} />
                    <Route path= "coin/:id" element={<Coin/>}/>
                    <Route path= "favorites" element={<GetFavorites/>}/>
                </Route>
                
            </Routes>
        </Router>
    )
};

export default App;