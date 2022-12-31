import { useEffect, useState } from 'react'
import Letter, { AccuracyEnum } from '../Letter'

interface WordProps {
    isWordEvaluated: boolean
    guessWordValue: string
}

const Word = ({ isWordEvaluated, guessWordValue }: WordProps) => {
    const [isEvaluated, setIsEvaluated] = useState(false)
    const [guessValue, setGuessValue] = useState('')

    useEffect(() => {
        setGuessValue(guessWordValue)
    }, [guessWordValue])
    useEffect(() => {
        setIsEvaluated(isWordEvaluated)
    }, [isWordEvaluated])

    return (
        <>
            {
                guessValue.toUpperCase()
                    .split('')
                    .map((nexLetter, letterIndex) => {
                        return <Letter
                            key={'letter_' + letterIndex}
                            value={nexLetter}
                            accuracy={AccuracyEnum.none}
                            position={letterIndex}
                        />
                    })
            }
        </>
    )
}

export default Word