'use client'

import React from "react";
import { useState } from "react";

import styles from "./page.module.css";

import { Input } from "./components/input/input";
import { ButtonContainer } from "./components/button-container/buttonContainer";
import { HistoryContainer } from "./components/historyContainer/historyContainer";
import { ClearButton } from "./components/clearButton/clearButton";

import { ClearElement, Clear, CheckBrackets, Default, Calculating } from './math/math'

export default function Home() {
  const [expr, setExpr] = useState('');
  const [length, setLength] = useState(0);
  const [history, setHistory] = useState([]);

  const handleClick = (event) => {
    let value = event.target.value
    switch (value) {
      case 'CE':
        var _ = ClearElement(expr) //return expression type=string
        setExpr(_) // set expression
        break
      case 'C':
        var _ = Clear() // return empty expression
        setExpr(_) // set empty expression
        break
      case ')':
      case '(':
        var _ = CheckBrackets(expr, value) //return expression with ( ) or without them
        setExpr(_) // set expression
        break
      case '=':
        var _ = Calculating(expr) //return the answer of the expression
        setHistory([...history, { exp: expr, res: _ }]) // add the expr and result to the history
        setExpr('') // clear the input
        break
      default:
        setLength(length + 1) // set input length
        if (length === 30) {
          alert('Слишком большое число.')
          setLength(0)
          setExpr('') // clear the expression
          break
        }
        var _ = Default(expr, value) //defualt case => return the expression with the next symbol
        setExpr(_) // set expression
        break
    }
  }

  const clearHistory = () => {
    setHistory([]) // clear the history
    setExpr('') // clear the expression
  }

  return (
    <main className={styles['main']}>
      <Input val={expr} />
      <ButtonContainer onClick={handleClick} />
      {history.length > 0 && (
        <HistoryContainer history={history} />
      )}
      {history.length > 0 && (
        <ClearButton onClick={clearHistory} />
      )}
    </main>
  );
}