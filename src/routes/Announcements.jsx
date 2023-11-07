import { useEffect, useState } from "react";
import Announcement from "../components/announcement/Announcement";
import { fetchAnnouncementsData } from "../services/announcementServices";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncementsData().then((data) => {
      if (data) {
        setAnnouncements(data);
        // console.log(data);
      }
    });
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-5">
      {announcements.map((announcement) => (
        <Announcement
          key={announcement._id}
          announcement={announcement}
        />
      ))}
    </div>
  );
};

export default Announcements;
