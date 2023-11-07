import { useEffect, useState } from "react";
import Challenge from "../components/challenges/Challenge";
import { fetchChallengesData } from "../services/challengeServices";

const Challenges = () => {

  const [challengesData, setChallengesData] = useState([]);

  useEffect(() => {
    fetchChallengesData().then((data) => {
      if (data) {
        setChallengesData(data);
      }
    });
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-5">
      {challengesData.map((challenge) => (
        <Challenge key={challenge._id} challenge={challenge} />
      ))}
    </div>
  );
};

export default Challenges;
