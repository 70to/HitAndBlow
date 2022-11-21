import React, {useMemo} from "react";
import {ROW_SIZE} from "../constants";

interface History {
    guess: number[];
    hit: number;
    blow: number;
}

type HistoryRowProps = {
    histories: History[];
}

const HistoryTable = (props: HistoryRowProps) => {
    const ROWS = useMemo<Array<number>>(() => new Array(ROW_SIZE).fill(0), []);
    return (
        <div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-xl font-semibold text-gray-900 sm:pl-6">
                                        Guess
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-xl font-semibold text-gray-900">
                                        HIT
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-xl font-semibold text-gray-900">
                                        BLOW
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {ROWS.map((_, index) => (
                                    <tr key={index} className="h-20">
                                        <td className="whitespace-nowrap pl-4 pr-3 text-xl font-medium text-gray-900 sm:pl-6">
                                            {props.histories[index]?.guess}
                                        </td>
                                        <td className="whitespace-nowrap px-3 text-xl text-gray-500">{props.histories[index]?.hit}</td>
                                        <td className="whitespace-nowrap px-3 text-xl text-gray-500">{props.histories[index]?.blow}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryTable;
