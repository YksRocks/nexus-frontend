import { Avatar, Badge, Box, Flex, Image, Tag } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GiPodiumSecond, GiPodiumWinner, GiPodiumThird } from "react-icons/gi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { fetchUserData } from "../services/userServices";
import { useParams } from "react-router-dom";

function Profile() {
  const toast = useToast();
  const backendUrl =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:5001";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [userData, setUserData] = useState({});
  const [updatedCodeforcesId, setUpdatedCodeforcesId] = useState("");
  const [updatedCodechefId, setUpdatedCodechefId] = useState("");
  const [updatedLeetcodeId, setUpdatedLeetcodeId] = useState("");
  const [updatedGithubId, setUpdatedGithubId] = useState("");
  const [updatedBio, setUpdatedBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);
  const { libId } = useParams();

  console.log(libId);

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  const showToast = (status, description) => {
    toast({
      title: status,
      description: description,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdateCodechefId = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/users/${userData._id}`,
        {
          codechefId: updatedCodechefId,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Codechef ID updated successfully");
      }
    } catch (error) {
      console.error("Error updating Codechef ID", error);
      showToast("error", "Error updating Codechef ID");
    }
    updateCodechefProfile();
  };

  const updateCodechefProfile = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/contests/codechef/${userData._id}`,
        {
          codechefId: updatedCodechefId,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Codechef Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating Codechef Profile", error);
      showToast("error", "Error updating Codechef Profile");
    }
  };

  const handleUpdateCodeforcesId = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/users/${userData._id}`,
        {
          codeforcesId: updatedCodeforcesId,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Codeforces ID updated successfully");
      } else {
        console.error(
          "Codeforces ID update failed with status:",
          response.status
        );
        showToast("error", "Codeforces ID update failed");
      }
    } catch (error) {
      console.error("Error updating Codeforces ID:", error);
      showToast("error", "Error updating Codeforces ID");
    }
  };

  const handleUpdateLeetcodeId = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/users/${userData._id}`,
        {
          leetcodeId: updatedLeetcodeId,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Leetcode ID updated successfully");
      }
    } catch (error) {
      console.error("Error updating Leetcode ID", error);
      showToast("error", "Error updating Leetcode ID");
    }
  };

  const handleUpdateGithubId = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/users/${userData._id}`,
        {
          githubId: updatedGithubId,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Github ID updated successfully");
      }
    } catch (error) {
      console.error("Error updating Github ID", error);
      showToast("error", "Error updating Github ID");
    }
  };

  const handleUpdateBio = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/users/${userData._id}`,
        {
          bio: updatedBio,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        showToast("success", "Bio updated successfully");
        setIsEditingBio(false);
        setUserData({ ...userData, bio: updatedBio });
      }
    } catch (error) {
      console.error("Error updating Bio", error);
      showToast("error", "Error updating Bio");
    }
  };

  return (
    <>
      <div>
        <Flex className="md:flex-row flex-col" color="white">
          <Box
            flex="1"
            // size="150px"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div className="flex justify-center m-4 p-2">
              <Image
                borderRadius="full"
                boxSize="150px"
                as={Avatar}
                src={userData.userImg}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="mx-3 justify-center items-center flex space-x-4">
                {/* <Tag>
                    {" "}
                    <GiPodiumSecond className="w-5 h-5" /> 4{" "}
                  </Tag>
                  <Tag>
                    {" "}
                    <GiPodiumWinner className="w-8 h-8" /> 4{" "}
                  </Tag>
                  <Tag>
                    {" "}
                    <GiPodiumThird className="w-5 h-5" /> 4{" "}
                  </Tag> */}
                <h4 className="text-2xl">RANK #1</h4>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center mx-1">
              {isEditingBio ? (
                <div className="w-full flex flex-col justify-center items-center">
                  <input
                    className="w-full h-28 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                    name="text"
                    type="text"
                    value={updatedBio}
                    onChange={(e) => setUpdatedBio(e.target.value)}
                  />
                  <button
                    className="w-1/4 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleUpdateBio}
                  >
                    Update
                  </button>
                  <button
                    className="w-1/4 mt-1 py-1 bg-red-500 hover:bg-red-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      setIsEditingBio(false);
                      setUpdatedBio(userData.bio); // Reset the edited text
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex justify-center text-center items-center flex-col">
                  <p
                    // fontWeight="bold"
                    // colorScheme="gray"
                    className="w-fit mx-2 my-2 font-bold text-2xl"
                  >
                    {" "}
                    Bio{" "}
                  </p>
                  <Tag fontWeight="" colorScheme="" className="mt-4">
                    {userData.bio}
                  </Tag>
                  <Tag
                    fontWeight="bold"
                    colorScheme="gray"
                    className="w-fit cursor-pointer mx-2 my-2 mt-5"
                    onClick={() => setIsEditingBio(true)}
                  >
                    Edit
                    <AiFillEdit className="w-4 h-4" />
                  </Tag>
                </div>
              )}
            </div>
          </Box>
          <Box
            flex="2"
            className="flex space-y-3 flex-col justify-center items-start"
          >
            <div className="w-full flex justify-between px-3 py-4">
              <div className="flex flex-col justify-between space-y-3 mx-1 w-[100%]">
                <h1 className="font-bold text-3xl">Student Details</h1>
                <div className="flex flex-row ">
                  <Tag
                    //   fontWeight="bold"
                    //   colorScheme="gray"
                    //   className="bg-transparent"
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid grey",
                      width: "100%",
                      padding: "13px",
                    }}
                  >
                    {" "}
                    {userData.username}{" "}
                  </Tag>
                  <Tag
                    fontWeight="bold"
                    colorScheme="gray"
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid grey",
                      width: "100%",
                      padding: "13px",
                      marginLeft: "35px",
                    }}
                  >
                    {" "}
                    {userData.email}{" "}
                  </Tag>
                </div>
                <div className="flex flex-row">
                  <Tag
                    fontWeight="bold"
                    colorScheme="gray"
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid grey",
                      width: "100%",
                      padding: "13px",
                    }}
                  >
                    {" "}
                    {userData.libId}{" "}
                  </Tag>
                  <Tag
                    fontWeight="bold"
                    colorScheme="gray"
                    sx={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid grey",
                      width: "100%",
                      padding: "13px",
                      marginLeft: "35px",
                    }}
                  >
                    {" "}
                    {userData.branch}{" "}
                  </Tag>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  px-3 py-4">
              <h1 className="font-bold text-3xl">Coding Platforms</h1>
              <div className="flex flex-row">
                <div className="w-1/2 font-bold flex flex-col justify-center items-center">
                  {userData.codechefId ? (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid grey",
                        width: "100%",
                        padding: "13px",
                        // marginLeft: "35px",
                        borderRadius: "10px",
                      }}
                    >
                      {userData.codechefId}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full relative flex items-center">
                        <svg
                          type="button"
                          onClick={() => {
                            handleUpdateCodechefId();
                            updateCodechefProfile();
                          }}
                          className="absolute ml-[90%] cursor-pointer "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          />
                        </svg>
                        <input
                          className="w-1/2  mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                          name="text"
                          autoComplete="off"
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid grey",
                            width: "100%",
                            padding: "13px",

                            // marginLeft: "35px",
                          }}
                          value={updatedCodechefId}
                          placeholder="CodeChef Id"
                          onChange={(e) => setUpdatedCodechefId(e.target.value)}
                        />
                        {/* <button
                          className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                          type="button"
                          onClick={() => {
                            handleUpdateCodechefId();
                            updateCodechefProfile();
                          }}
                        >
                          Update
                        </button> */}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-1/2 font-bold flex flex-col justify-center items-center">
                  {userData.codeforcesId ? (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid grey",
                        width: "100%",
                        padding: "13px",
                        borderRadius: "10px",
                      }}
                    >
                      {userData.codeforcesId}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full relative flex items-center">
                        <svg
                          type="button"
                          onClick={() => {
                            handleUpdateCodeforcesId();
                          }}
                          className="absolute ml-[90%]  cursor-pointer "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          />
                        </svg>
                        <input
                          className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                          name="text"
                          autoComplete="off"
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid grey",
                            width: "100%",
                            padding: "13px",
                            marginLeft: "35px",
                          }}
                          type="text"
                          value={updatedCodeforcesId}
                          placeholder="CodeForces Id"
                          onChange={(e) =>
                            setUpdatedCodeforcesId(e.target.value)
                          }
                        />
                        {/* <button
                        className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleUpdateCodeforcesId}
                      >
                        Update
                      </button> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2 font-bold flex flex-col justify-center items-center">
                  {userData.leetcodeId ? (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid grey",
                        width: "100%",
                        padding: "13px",
                        borderRadius: "10px",
                      }}
                    >
                      {userData.leetcodeId}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center ">
                      <div className="w-full relative flex items-center ">
                        <svg
                          type="button"
                          onClick={() => {
                            handleUpdateLeetcodeId();
                          }}
                          className="absolute ml-[90%]  cursor-pointer "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          />
                        </svg>
                        <input
                          className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                          name="text"
                          type="text"
                          autoComplete="off"
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid grey",
                            width: "100%",
                            padding: "13px",
                          }}
                          value={updatedLeetcodeId}
                          placeholder="LeetCode Id"
                          onChange={(e) => setUpdatedLeetcodeId(e.target.value)}
                        />
                        {/* <button
                        className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleUpdateLeetcodeId}
                      >
                        Update
                      </button> */}
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-1/2 font-bold flex flex-col justify-center items-center">
                  {userData.githubId ? (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid grey",
                        width: "100%",
                        padding: "13px",
                        borderRadius: "10px",
                      }}
                    >
                      {userData.githubId}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full relative flex items-center">
                        <svg
                          type="button"
                          onClick={() => {
                            handleUpdateGithubId();
                          }}
                          className="absolute ml-[90%] cursor-pointer "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          />
                        </svg>
                        <input
                          className="w-1/2 mt-1 shadow appearance-none border border-gray-700 hover:border-gray-400 bg-neutral-900 text-white rounded leading-tight focus:outline-none focus:shadow-outline"
                          name="text"
                          type="text"
                          autoComplete="off"
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid grey",
                            width: "100%",
                            padding: "13px",
                            marginLeft: "35px",
                          }}
                          value={updatedGithubId}
                          placeholder="GitHub Id"
                          onChange={(e) => setUpdatedGithubId(e.target.value)}
                        />
                        {/* <button
                        className="w-1/3 mt-1 py-1 bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleUpdateGithubId}
                      >
                        Update
                      </button> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Profile;
