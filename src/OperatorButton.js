import React from 'react'

const OpButton = ({loadEquation, loadResult, clearResult}) => {
    const opArray = ["*", "+", "-", "/", "%", "."]
    const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const equateArray = ["="]

    return (
        <div>
            {opArray.map((op, index) => <button className = "numButton" key = {index}
                onClick = {() => loadEquation(numArray, opArray, op)}>{op}</button>)}
            <button className = "equate-button" onClick = {clearResult}>C</button>
            <button className = "equate-button" onClick = {loadResult}>{equateArray[0]}</button>
        </div>
    )
}
export default OpButton
