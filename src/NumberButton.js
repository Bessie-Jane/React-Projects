import React from 'react'

const NumberButton = ({loadEquation}) => {
    const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const opArray = ["*", "+", "-", "/", "%", "."]
    return (
        <div>
            {numArray.map((num, index) => <button onClick = {() => loadEquation(numArray, opArray, num)}
            className = "numButton" key = {index}>{num}</button>)}
        </div>
    )
}
export default NumberButton