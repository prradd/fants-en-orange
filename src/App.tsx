import React, {useState} from 'react';
import './App.css';
import {fantsData} from './Data/fants'

function App() {
    const [randomFant, setRandomFant] = useState("Spin It!");

    const HandleClick = () => {
        const randomNum = Math.floor(Math.random() * fantsData.length);
        setRandomFant(fantsData[randomNum]?.fantText);
    }

    return (
        <div className="App">
            <div className="fant-text">
                {randomFant}
            </div>
            <button
                id="spin"
                className="neon-button"
                onClick={() => HandleClick()}
            >Spin It!</button>
        </div>
    );
}

export default App;
