import { SiCodechef } from "react-icons/si";
import { GrResume } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchChallengesData } from "../services/challengeServices";
import { Button } from "@chakra-ui/react";
import { fetchUserData } from "../services/userServices";


const Leaderboard = () => {

    const [challengesData, setChallengesData] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData().then((data) => {
            if (data) {
                setUserData(data);
            }
        });
    }, []);


    useEffect(() => {
        fetchChallengesData().then((data) => {
            if (data) {
                setChallengesData(data);
            }
        });
    }, []);

    return (
        <div className="flex flex-col justify-around space-y-5">
            {challengesData.map((challenge, index) => (
                <div key={index} className="flex items-center justify-between border border-zinc-700 rounded-xl p-5 bg-zinc-900/10">
                    <div className="flex items-center">
                        <SiCodechef className="text-7xl text-codechef" />
                        <h2 className="text-lg font-semibold text-gray-400 ml-2">{challenge.name}</h2>
                    </div>
                    <div className="flex space-x-3">
                        {userData.role === "admin" && (
                            <Button
                                // isLoading
                                loadingText='Loading'
                                colorScheme='gray'
                                spinnerPlacement='start'
                            >
                                Generate Result
                                <GrResume className="ml-2" />
                            </Button>
                        )

                        }
                        <Link
                            to={`/leaderboard/${challenge.name.toLowerCase().split(' ')[0]}`}
                            className="flex justify-end items-center bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                        >
                            View Results
                            <AiOutlineArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leaderboard
