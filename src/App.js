import './App.css';

import React, { useState } from 'react';

export default function App() {
    //declare now
    const now = new Date().toLocaleTimeString();

    //state of time
    const [time, setTime] = useState(now);

    //function updateTime
    const updateTime = () => {
        //newTime
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    };

    //setInterval = HOW often do you wanna update this?
    setInterval(updateTime, 1000);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Good morning, Avery</h1>
                <h2>The time is: {time}</h2>
            </header>
        </div>
    );
}
