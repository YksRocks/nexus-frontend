import { useEffect, useState } from "react";
import Challenge from "../components/challenges/Challenge";
import { fetchChallengesData } from "../services/challengeServices";
import { fetchUserData } from "../services/userServices";

const Challenges = () => {

  const [challengesData, setChallengesData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchChallengesData().then((data) => {
      if (data) {
        setChallengesData(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-5">
      {challengesData.map((challenge) => (
        <Challenge key={challenge._id} challenge={challenge} role={userData.role} />
      ))}
    </div>
  );
};

export default Challenges;
