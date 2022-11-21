import React, {useEffect} from "react";

import HistoryTable from "../components/HistoryTable";
import GuessForm from "../components/GuessForm";
import useHitAndBlow from '../hooks/useHitAndBlow'

export default function Home() {
    const {currentGuess, histories, isCorrect, handleKeyup} = useHitAndBlow()
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setTimeout(() => alert('正解!'), 1000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect])

    return (
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center">
            <div className="">
                <HistoryTable histories={histories}/>
            </div>
            <div className="mt-10">
                <div className="flex justify-around">
                    <GuessForm currentGuess={currentGuess}/>
                </div>
            </div>
        </div>
    )
}
