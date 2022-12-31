import { useEffect, useState } from 'react'
import Letter from '../Letter'
import { AccuracyEnum } from "../../core/AccuracyEnum"
import { evaluateWordScore } from '../../core/Evaluation'

interface WordProps {
    isWordEvaluated: boolean
    guessWordValue: string
}

const retrieveAnswer = ():string => { return 'react'}

const Word = ({ isWordEvaluated, guessWordValue }: WordProps) => {
    const inititalAccuracyArray = [
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none
    ]
    const [evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(inititalAccuracyArray)
    const [isEvaluated, setIsEvaluated] = useState(false)
    const [guessValue, setGuessValue] = useState('')

    useEffect(() => {
        setGuessValue(guessWordValue.padEnd(5,'_'))},
        [guessWordValue]
    ) 

    useEffect(() => {
        setIsEvaluated(isWordEvaluated)},
        [isWordEvaluated]
    ) 

    useEffect(() => {
        const results = evaluateWordScore(guessValue, retrieveAnswer().toUpperCase())
        setEvaluatedResults(results)
        setIsEvaluated(true)
    }, [isWordEvaluated])

    return (
        <div className="ml-4">
            {
                guessValue.toUpperCase()
                    .split('')
                    .map((nexLetter, letterIndex) => {
                        return <Letter
                            key={'letter_' + letterIndex}
                            value={nexLetter}
                            accuracy={isEvaluated ? evaluatedResults[letterIndex] : AccuracyEnum.none}
                            position={letterIndex}
                        />
                    })
            }
        </div>
    )
}

export default Word