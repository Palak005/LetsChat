import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TinderCard from "react-tinder-card";

const Connect = () => {
  // Dummy Data
  const [users, setUsers] = useState([]);

  // Handle swipe events
  const handleSwipe = async(direction, user) => {
    if (direction === "right") {

      //Adding user as friend
      await axios.post("/api/user/add-friend", { friendId: user._id }, { withCredentials: true });  
      toast.success(`${user.username} added to friends`);

    } else if (direction === "left") {
      toast.error(`You rejected ${user.username}`);
    }
  };

  //Loading User Friends
  useEffect(()=>{
    const getFriends = async()=>{

      const res = await axios.get("/api/user/to-connect", {withCredentials:true});
      if(res?.data != null && res.data.newUsers != null) setUsers(res.data.newUsers);
    }

    getFriends();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center overflow-hidden">
      <div className="w-96 h-[500px] relative">
        {users.map((user) => (
          <TinderCard
            key={user._id}
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
