import React, { useState } from 'react'
import './App.css'
import Word from './component/Word'
import WordEntry from './component/WordEntry'

function App() {
  const [wordGuess, setWordGuess] = useState('')
  const [evaluate, setEvaluate] = useState(false)

  const handleGuessCompletion = (guess: string): void => {
    setEvaluate(true)
  }

  return (
    <div>
      <WordEntry
        onGuessEntered={(guess) => setWordGuess(guess)} 
        onGuessComplete={() => handleGuessCompletion(wordGuess)}
      />
      <Word
        isWordEvaluated={evaluate}
        guessWordValue={wordGuess}
      />
    </div>
  )
}

export default App