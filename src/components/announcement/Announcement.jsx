import React, { useState } from "react";
import { AiOutlineCalendar, AiFillEdit } from "react-icons/ai";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";

const Announcement = ({ announcement, role }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAnnouncement, setEditedAnnouncement] = useState(announcement.description);

    const updatedAt = new Date(announcement.updatedAt);
    const formattedDate = `${updatedAt.toLocaleDateString()}`;

    const priorityIcon =
        announcement.priority === "high"
            ? <FcHighPriority className="text-3xl" />
            : announcement.priority === "medium"
                ? <FcMediumPriority className="text-3xl" />
                : <FcLowPriority className="text-3xl" />;

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedAnnouncement(announcement.description); // Reset edited announcement to initial value on cancel
    };

    const handleUpdate = () => {
        console.log('Update announcement:', editedAnnouncement);
        // Here you would put your update logic or API call
        setIsEditing(false);
    };

    return (
        <div className="border border-zinc-700 rounded-xl p-5 bg-zinc-900/10 hover:bg-zinc-800/20 hover:cursor-pointer flex justify-between items-center">
            <div className="flex flex-col space-y-3 w-full">
                {priorityIcon}
                <h2 className="text-lg font-semibold">{announcement.name}</h2>
                {isEditing ? (
                    <>
                        <textarea
                            value={editedAnnouncement}
                            onChange={(e) => setEditedAnnouncement(e.target.value)}
                            className="flex-grow h-32 min-h-[8rem] bg-zinc-700 text-white p-2 rounded"
                        />
                        <div className="flex justify-start space-x-3 mt-2">
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p>{announcement.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <AiOutlineCalendar className="text-3xl text-gray-400" />
                                <span className="text-gray-400">{formattedDate}</span>
                            </div>
                            {role === 'admin' && (
                                <button
                                    onClick={handleEdit}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                                >
                                    Edit <AiFillEdit className="ml-2" />
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Announcement;
