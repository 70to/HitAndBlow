export default function GuessInput() {
    return (
        <div>
            <div className="flex justify-around">
                <div className="custom-number-input w-24">
                    <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                        <input type="number"
                               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                               name="custom-input-number" defaultValue="?"></input>
                    </div>
                </div>
                <div className="custom-number-input w-24">
                    <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                        <input type="number"
                               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                               name="custom-input-number" defaultValue="?"></input>
                    </div>
                </div>
                <div className="custom-number-input w-24">
                    <div className="flex flex-row h-24 w-full rounded-lg relative bg-transparent mt-1">
                        <input type="number"
                               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-5xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                               name="custom-input-number" defaultValue="?"></input>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <a className="group inline-flex items-center justify-center rounded-full px-10 py-5 text-xl font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                   href="#"><span>Guess</span></a>
            </div>
        </div>
    )
}
