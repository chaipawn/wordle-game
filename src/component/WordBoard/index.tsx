import { useEffect, useState } from "react"
import Word from "../Word"

interface Guess {
    guessedWord: string,
    evaluated: boolean
}

interface WordBoardProps {
    guess: string,
    currentPosition: number
}

const WordBoard = ({guess, currentPosition}: WordBoardProps) => {
    const initialGuessState: Guess[] = [
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
        { guessedWord: '', evaluated: false },
    ]

    const [wordGuesses, setWordGuesses] = useState<Guess[]>(initialGuessState)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        if (currentWordIndex > 5) return
        const currentGuess: Guess = {
            guessedWord: guess,
            evaluated: false
        }
        const updatedGuesses: Guess[] = [
            ...wordGuesses.slice(0, currentWordIndex),
            currentGuess,
            ...wordGuesses.slice(currentWordIndex + 1)
        ]
        setWordGuesses(updatedGuesses)
    }, [guess])

    useEffect(() => {
        if (currentWordIndex > 5) return
        if (guess.length < 5) return

        const currentGuess: Guess = {
            guessedWord: guess,
            evaluated: true
        }
        const updatedGuesses: Guess[] = [
            ...wordGuesses.slice(0, currentWordIndex),
            currentGuess,
            ...wordGuesses.slice(currentWordIndex + 1)
        ]
        setWordGuesses(updatedGuesses)
        setCurrentWordIndex(currentPosition)
    }, [currentPosition])

    return (
        <>
        {
            wordGuesses.map((wordGuess: Guess, index: number) => {
                return <Word
                    key={`guesses_${index}`}
                    isWordEvaluated={wordGuess.evaluated}
                    guessWordValue={wordGuess.guessedWord}
                />
            })
        }
        </>
    )
}

export default WordBoard