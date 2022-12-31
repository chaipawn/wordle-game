import { useState } from "react"

interface WordEntryProps {
    onGuessEntered(guess: string): void
}

const WordEntry = ({ onGuessEntered }: WordEntryProps) => {
    const [value, setValue] = useState('')
    
    const getValidWordleString = (rawString: string) => {
        const validWordleString = rawString.replace(/[^a-z]/gi, '')
        return validWordleString.toUpperCase()
    }
    
    const handleLetterEntry = (e: any) => {
        const validString: string = getValidWordleString(e.target.value)
        onGuessEntered(validString)
        setValue(validString)
    }

    return (
        <input
            className="m-1 rounded-lg w-60 h-7 block border-2 border-solid border-blue-500 focus:outline-none focus:shadow-sm focus:shadow-blue-500"
            autoFocus
            placeholder="Enter your guess..."
            value={value}
            maxLength={5}
            onChange={(e) => handleLetterEntry(e)}
        />
    )
}

export default WordEntry