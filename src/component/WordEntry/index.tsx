import React, { useRef, useState } from "react"

interface WordEntryProps {
    onGuessEntered(guess: string): void
    onGuessComplete(): void
}

const WordEntry = ({ onGuessEntered, onGuessComplete }: WordEntryProps) => {
    const [value, setValue] = useState('')
    const wordEntryRef = useRef<HTMLInputElement>(null);
    
    const getValidWordleString = (rawString: string) => {
        const validWordleString = rawString.replace(/[^a-z]/gi, '')
        return validWordleString.toUpperCase()
    }
    
    const handleLetterEntry = (e: any) => {
        const validString: string = getValidWordleString(e.target.value)
        onGuessEntered(validString)
        setValue(validString)
    }

    const handleGuessComplete = () => {
        setValue('')
        wordEntryRef?.current?.focus()
        onGuessComplete()
    }

    const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (value.length !== 5) return
        if (e.key === "Enter") {
            handleGuessComplete()
        }
    }

    return (
        <div className="flex">
            <input
                className="m-1 p-1 rounded-lg w-72 h-10 block border-2 border-solid border-blue-500 focus:outline-none focus:shadow-sm focus:shadow-blue-500"
                autoFocus
                placeholder="Enter your guess..."
                value={value}
                maxLength={5}
                ref = {wordEntryRef}
                onChange={(e) => handleLetterEntry(e)}
                onKeyPress={(e) => handleEnterPressed(e)}
            />
            <button
                className="w-20 h-10 bg-red-800 text-white rounded-md m-1"
                disabled={value.length !== 5}
                onClick={handleGuessComplete}
            >
                Guess
            </button>
        </div>
    )
}

export default WordEntry