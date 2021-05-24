import React from 'react'
import './App.css';
import MainConversion from './components/MainConversion'
import state from "./redux/state"


    function App(props) {
        return (
            <div className="app-wrapper">
                <MainConversion state={state}/>
            </div>
        );
    };



export default App;
