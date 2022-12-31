import React, { useState } from 'react'
import './App.css'
import Word from './component/Word'
import WordEntry from './component/WordEntry'

function App() {
  const [wordGuess, setWordGuess] = useState('')
  return (
    <div>
      <WordEntry onGuessEntered={(guess) => setWordGuess(guess)} />
      <Word isWordEvaluated={false} guessWordValue={wordGuess} />
    </div>
  )
}

export default App