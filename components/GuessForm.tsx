import React, {useMemo} from "react";
import GuessInput from "./GuessInput";

type guessForm = {
    currentGuess: string;
};

export default function GuessForm(props: guessForm) {
    let letters = props.currentGuess.split('')
    const ROWS = useMemo<Array<number>>(() => new Array(3).fill(0), []);
    return (
        <>
            {
                ROWS.map((_, index) => (
                    <GuessInput
                        letter={letters[index]}
                        key={index}
                    />
                ))
            }
        </>
    );
}