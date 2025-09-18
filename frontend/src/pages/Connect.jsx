import { useState } from "react";
import TinderCard from "react-tinder-card";

const Connect = () => {
  // Dummy user data (replace with backend data later)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Alice Johnson",
      bio: "Love photography 📸 and travel 🌍",
      interests: ["Travel", "Music", "Photography"],
      avatar: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      username: "Bob Smith",
      bio: "Tech geek 💻 | Fitness enthusiast 🏋️‍♂️",
      interests: ["Tech", "Fitness", "Gaming"],
      avatar: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      username: "Charlie Brown",
      bio: "Coffee lover ☕ | Bookworm 📚",
      interests: ["Books", "Coffee", "Art"],
      avatar: "https://via.placeholder.com/300",
    },
  ]);

  // Handle swipe events
  const handleSwipe = (direction, user) => {
    if (direction === "right") {
      console.log("Added as friend:", user.username);
      // 🔗 Add friend API call here
    } else if (direction === "left") {
      console.log("Rejected:", user.username);
      // 🔗 Reject logic here
    }
  };

  return (
    <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center overflow-hidden">
      <div className="w-96 h-[500px] relative">
        {users.map((user) => (
          <TinderCard
            key={user.id}
            onSwipe={(dir) => handleSwipe(dir, user)}
            // preventSwipe={["up", "down"]}
            flickOnSwipe={true}
            className="absolute w-full h-full"
          >
            <div className="w-full h-full bg-[#2C2638] rounded-2xl shadow-lg flex flex-col overflow-hidden">
              {/* Profile Photo */}
              <div className="h-1/2 w-full">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Details */}
              <div className="flex flex-col justify-center items-center p-4 h-1/2 text-center">
                <h2 className="text-white text-2xl font-bold">{user.username}</h2>
                <p className="text-gray-300 mt-2">{user.bio}</p>

                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {user.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#6D54B5] text-white rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Connect;
