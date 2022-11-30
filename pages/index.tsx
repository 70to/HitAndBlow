import React, {useState, useEffect} from "react";

import HistoryTable from "../components/HistoryTable";
import GuessForm from "../components/GuessForm";
import useHitAndBlow from '../hooks/useHitAndBlow'
import HowTo from "../components/HowTo";
import EndGame from "../components/EndGame";
import {ROW_SIZE} from "../constants";

export default function Home() {
    const {correctNumber, currentGuess, histories, isCorrect, turn, handleKeyup} = useHitAndBlow()
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn >= ROW_SIZE) {
            setTimeout(() => setShowModal(true), 700)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center">
            {showModal && <EndGame isCorrect={isCorrect} turn={turn} correctNumber={correctNumber}/>}
            <div className="flex">
                <h1 className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 text-4xl sm:text-4xl">
                    Hit And Blow
                </h1>
                <HowTo/>
            </div>
            <div className="">
                <HistoryTable histories={histories}/>
            </div>
            <div className="mt-6">
                <div className="flex justify-around">
                    <GuessForm currentGuess={currentGuess}/>
                </div>
            </div>
        </div>
    )
}
