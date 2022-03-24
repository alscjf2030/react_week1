import './App.css';
import React, {useState} from 'react';
import Week1 from "./Week1";
import {Route} from 'react-router-dom'
import Detail from "./Detail";


const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const randomArr = new Array(5).fill(null)

const getRandomCheck = () => {
    return randomArr.map(() => {
        // 0, 1 둘중 하나만 나오게.
        // 0이 나오면 false, 1이 나오면 true
        return !!getRandomInt(0, 2)
    }).sort((a, b) => {
        if ( a === true && b === false ) {
            return -1
        }
        if ( a === false && b === true ) {
            return 1
        }
        return 0
    })
}

function App() {
    const [checked, setChecked] = useState({
        monday: getRandomCheck(),
        tuesday: getRandomCheck(),
        wednesday: getRandomCheck(),
        thursday: getRandomCheck(),
        friday: getRandomCheck(),
        saturday: getRandomCheck(),
        sunday: getRandomCheck(),
    })

    return (
        <div className="App">
            <div className="Bpp">
                <Route path="/" exact>
                    <h1>내 일주일 평점</h1>
                    <Week1 checked={checked}/>
                </Route>
                <Route path="/:id" exact component={Detail}>
                    <Detail checked={checked} setChecked={setChecked}/>
                </Route>
            </div>
        </div>
    );
}

export default App;