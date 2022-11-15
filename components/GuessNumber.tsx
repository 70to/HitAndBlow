import React from 'react';

function GuessNumber() {
    return (
        <div className="flex justify-around">
            <div className="custom-number-input w-24">
                <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                    <input type="text"
                           className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                           name="custom-input-number" defaultValue="?"></input>
                </div>
            </div>
            <div className="custom-number-input w-24">
                <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                    <input type="text"
                           className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                           name="custom-input-number" defaultValue="?"></input>
                </div>
            </div>
            <div className="custom-number-input w-24">
                <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                    <input type="text"
                           className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                           name="custom-input-number" defaultValue="?"></input>
                </div>
            </div>
        </div>
    );
}

export default GuessNumber;