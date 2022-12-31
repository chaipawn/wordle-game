export enum AccuracyEnum {
    correct,
    wrongPosition,
    doesNotExist,
    none
}

export const accuracyColorMap = new Map<AccuracyEnum, string>(
    [
        [AccuracyEnum.correct, '#6CA965'],
        [AccuracyEnum.wrongPosition, '#C8B653'],
        [AccuracyEnum.none, 'black'],
        [AccuracyEnum.doesNotExist, '#787C7F']
    ]
)

interface LetterProps {
    position: number
    value: string
    accuracy: AccuracyEnum
}

export const Letter = ({ position, value, accuracy }: LetterProps) => {
    const backgroundColor = accuracyColorMap.get(accuracy)

    return (
        <>
            <button
                className="m-1 w-12 h-12 rounded-sm text-white text-3xl font-bold"
                style={{ background: backgroundColor }}
            >
                {value}
            </button>
        </>
    )
}

export default Letter