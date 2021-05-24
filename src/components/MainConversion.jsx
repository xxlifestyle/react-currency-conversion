import React from "react";


const MainConversion = (props) => {
    let newElement = React.createRef();
    let addResult = () => {
        let text = newElement.current.value;
        props.state.calculate(text)
    }
    return(

    <div className="MainConversion">
    <h2>Курс доллара</h2>
        <h3>$ = 73 руб</h3>
    <input type="number" className="inputResult" ref={newElement} />
    <button onClick={
        () => {
            addResult();
        }
    }>Расчитать</button>
    <p>Результат: {props.state.newCalculation}</p>
    </div>
);
};
export default MainConversion