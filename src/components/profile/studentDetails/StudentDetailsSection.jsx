// StudentDetailsSection.js
import { Flex } from "@chakra-ui/react";
import StudentDetails from "./StudentDetails";

function StudentDetailsSection({ userData }) {
    return (
        <div className="w-full px-3 py-4 flex flex-col justify-between space-y-3 mx-1">
            <h1 className="font-bold mb-4 text-3xl">Student Details</h1>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <StudentDetails label="Username" value={userData.username} />
                <StudentDetails label="Email" value={userData.email} />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <StudentDetails label="Library ID" value={userData.libId} />
                <StudentDetails label="Branch" value={userData.branch} />
            </div>
        </div>
    );
}

export default StudentDetailsSection;
