import {useEffect, useState} from 'react'
import {History} from "../types/History";
import {three_random_number} from "../util/number";
import {ROW_SIZE} from "../constants";

const useHitAndBlow = () => {
    const [correctNumber, setCorrectNumber] = useState<string>('')
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState<string>('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [histories, setHistories] = useState<History[]>([]);

    useEffect(() => {
        setCorrectNumber(three_random_number())
    }, [setCorrectNumber])

    const handleGuessNumbers = () => {
        if (currentGuess === correctNumber) {
            setIsCorrect(true)
        }
        let correctNumberArray: number[] = correctNumber.split('').map(Number)
        let currentGuessArray: number[] = currentGuess.split('').map(Number)
        let hit = 0;
        let blow = 0;
        for (let index: number = 0; index < 3; index++) {
            if (correctNumberArray[index] === currentGuessArray[index]) {
                hit++
                continue
            }
            if (correctNumberArray.includes(currentGuessArray[index])) {
                blow++
            }
        }
        const newHistory = {guess: currentGuessArray, hit: hit, blow: blow, id: Date.now()};
        const newHistories = [...histories, newHistory];
        setHistories(newHistories);
        setTurn(prevTurn => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    };

    const handleKeyup = ({key}: { key: string; }) => {
        if (key === 'Enter') {
            if (turn > ROW_SIZE) {
                console.log('you used all your guesses!')
                return
            }
            if (currentGuess.length !== 3) {
                console.log('number must be 3 chars.')
                return
            }
            handleGuessNumbers()
        }
        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }
        if (/^[0-9]$/.test(key) && !currentGuess.includes(key)) {
            if (currentGuess.length < ROW_SIZE) {
                setCurrentGuess(prev => prev + key)
            }
        }
    }

    return {correctNumber, turn, currentGuess, isCorrect, histories, handleKeyup}
}

export default useHitAndBlow