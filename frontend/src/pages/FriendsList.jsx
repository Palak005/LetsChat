import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const FriendsList = () => {
  // Example: Replace this with fetched data from backend
  const [friends, setFriends] = useState([]);

  // Unfriend function
  const handleUnfriend = async (id) => {
    setFriends((prev) => prev.filter((friend) => friend._id !== id));
    try {
      const res = await axios.post("/api/user/unfriend", { friendId: id }, { withCredentials: true });
      toast.success(res.data.message);

    } catch (error) {
      console.log("Error while unfriending : ", error);
      toast.error(error?.response?.data?.message || "Error while unfriending");
    }
  };

  //Fetching Friendlist
  useEffect(()=>{
    const getFriends = async()=>{
      const res = await axios.get("/api/user/friends", {withCredentials:true});
      console.log(res);
      if(res?.data){
        setFriends(res.data.friends);
      }
    }

    getFriends();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center">
      <div className="w-3/4 h-4/5  bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] rounded-3xl p-8 overflow-y-auto shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Your Friends</h1>

        {friends.length === 0 ? (
            <div className="w-4/4 h-4/5 flex items-center justify-center">         
                <p className="text-gray-400 text-3xl text-center mt-10">You have no friends yet 👥</p>
            </div>
        ) : (
          <div className="flex flex-col gap-4">
            {friends.map((friend) => (
              <div
                key={friend._id}
                className="flex items-center justify-between  bg-white/20 border-2 border-white/30 rounded-2xl w-full p-4 text-white"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#6D54B5]">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium">{friend.fullname}</span>
                </div>

                {/* Unfriend Button */}
                <button
                  onClick={() => handleUnfriend(friend._id)}
                  className="px-4 py-2 bg-[#6D54B5]  text-white rounded-lg text-sm transition"
                >
                  Unfriend
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
