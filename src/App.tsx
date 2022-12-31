import React, { useEffect, useState } from 'react'
import './App.css'
import WordBoard from './component/WordBoard'
import WordEntry from './component/WordEntry'
import { retrieveAnswer } from './core/AnswerRetriever'

function App() {
  const [wordGuess, setWordGuess] = useState('')
  const [nextGuessPosition, setNextGuessPosition] = useState(0)
  const [winning, setWinning] = useState<boolean | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [gameOverText, setGameOverText] = useState('')

  const handleGuessCompletion = (guess: string): void => {
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true)
      return
    }

    setNextGuessPosition(nextGuessPosition + 1)
  }

  useEffect(() => {
    if (winning != null) {
      setNextGuessPosition(0)
      setGameOver(true)
    }

    if (winning) {
      setGameOverText('🏆 You Won!! 🎉')
    } else if (winning === false) {
      setGameOverText(`Word: ${retrieveAnswer().toUpperCase()} 😭`)
    }
  }, [winning])

  useEffect(() => {
    if (nextGuessPosition === 6) {
      setWinning(false)
    }
  }, [nextGuessPosition])

  return (
    <div className="grid h-screen place-items-center">
      <div className="">
        { gameOver ?
          <div className="w-72 h-10 text-center text-2xl">
            {gameOverText}
          </div>
          :
          <WordEntry
            onGuessEntered={(guess) => setWordGuess(guess)} 
            onGuessComplete={() => handleGuessCompletion(wordGuess)}
          />
        }
        <WordBoard
          guess={wordGuess}
          currentPosition={nextGuessPosition}
        />
      </div>
    </div>
  )
}

export default App