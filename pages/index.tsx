import HistoryTable from "../components/HistoryTable";
import GuessInput from "../components/GuessInput";
import GuessNumber from "../components/GuessNumber";

export default function Home() {
    return (
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center">
            <GuessNumber/>
            <div className="mt-10">
                <HistoryTable/>
            </div>
            <div className="mt-10">
                <GuessInput/>
            </div>
        </div>
    )
}
