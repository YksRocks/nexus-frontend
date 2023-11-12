import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Leaderboard = () => {

    return (
        <div className="flex flex-col justify-around space-y-5">
            <div className="flex items-center justify-between border border-zinc-700 rounded-xl p-5 bg-zinc-900/10">
                <div className="flex items-center">
                    <SiCodechef className="text-7xl text-codechef" />
                    <h2 className="text-lg font-semibold text-gray-400 ml-2">CodeChef Leaderboard</h2>
                </div>
                <Link
                    to={'/leaderboard/codechef'}
                    className="flex justify-end items-center bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Results
                    <AiOutlineArrowRight className="ml-2" />
                </Link>
            </div>
            <div className="flex items-center justify-between border border-zinc-700 rounded-xl p-5 bg-zinc-900/10">
                <div className="flex items-center">
                    <FaHackerrank className="text-7xl text-hackerrank" />
                    <h2 className="text-lg font-semibold text-gray-400 ml-2">HackerRank Leaderboard</h2>
                </div>
                <button className="flex justify-end items-center bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                    View Results
                    <AiOutlineArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default Leaderboard
