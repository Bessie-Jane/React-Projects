import React, { useState } from 'react'
import Screen from './Screen'
import NumberButton from './NumberButton'
import "./calculator.css"
import OpButton from './OperatorButton'

const App = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);

  const LoadEquation = (numArray, opArray, item) => {
    if (numArray.includes(item)){
      let data = equation + item
      setEquation(data)
      console.log(data)
    }
    else if (opArray.includes(item)){
      let data = equation + " " + item + " "
      setEquation(data)
      console.log(data)
    }
  }

  const loadResult = () => {
    if(equation !== ""){
      let result = eval(equation)
      setResult(result)
      setEquation("")
    }else {
      setResult(0)
      setEquation("")
    }
  }

  const clearResult = () => {
    setEquation("")
    setResult(0)
  }

  return(
    <div className = "calculator-container">
      <Screen equation = {equation} result = {result} />
      <div className = "button-container">
        <NumberButton loadEquation = {LoadEquation} />
        <OpButton loadEquation = {LoadEquation} loadResult = {loadResult} clearResult = {clearResult} />
      </div>
    </div>
  )
}

export default App;
