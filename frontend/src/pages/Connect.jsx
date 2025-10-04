import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TinderCard from "react-tinder-card";

const Connect = () => {
  const [users, setUsers] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [showLimit, setShowLimit] = useState(false);

  // Handle swipe events
  const handleSwipe = async (direction, user) => {
    try{
      const res = await axios.post("/api/user/swipe", 
        { friendId: user._id },
        { withCredentials: true },
        {direction}
      )

      if (direction === "right") {
        toast.success(`${user.username} added to friends`);
      } else if (direction === "left") {
        toast.error(`You rejected ${user.username}`);
      }
    }catch (err) {
      if (err.response?.status === 403) {
        setShowLimit(true);
      } else {
        console.error(err);
      }
    }
    
    setCurrIndex((prev) => prev + 1);
  };

  // Load new users
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/api/user/to-connect", {
          withCredentials: true,
        });
        if (res?.data?.newUsers) setUsers(res.data.newUsers);
      } catch (error) {
        toast.error("Failed to load users");
      }
    };

    getUsers();
  }, []);

    if (users.length === 0 || currIndex >= users.length) {
      return (
        <div className="w-screen h-screen bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl font-bold mb-4">
            No more users to connect with
          </h1>
          <p className="text-white/70 text-center">
            You've swiped through all available users.
          </p>
        </div>
      );
  }

  if(showLimit){
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-3">Daily limit reached</h2>
        <p className="text-gray-600 mb-5">
          You’ve used all 5 free swipes for today.  
          Upgrade to unlock unlimited access!
        </p>
        <button 
          onClick={() => navigate('/pricing')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          View Plans
        </button>
      </div>
    </div>
  )};

  return 
    <div className="w-screen h-screen bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Instruction */}
      <div className="mt-10 text-center">
        {/* <h1 className="text-white text-3xl font-bold">Connect with People</h1> */}
        <p className="text-white/70 mb-5 text-3xl font-semibold">
          Swipe <span className="text-green-400 font-bold">right</span> to add, 
          <span className="text-red-400 font-bold"> left</span> to reject
        </p>
      </div>

      {/* Card with side indicators */}
      <div className="relative w-[90%] max-w-md h-[70vh] flex items-center justify-center">
        {/* Left Label */}
        <div className="absolute left-[-70px] top-1/2 rotate-[-90deg] text-red-400 font-semibold tracking-wide text-lg opacity-80">
          ← REJECT
        </div>

        {/* Card stack */}
        <div className="w-full h-full relative">
          {users.slice(currIndex, currIndex+1).map((user) => (
            <TinderCard
              key={user._id}
              onSwipe={(dir) => handleSwipe(dir, user)}
              preventSwipe={["up", "down"]}
              flickOnSwipe={true}
              className="absolute w-full h-full"
            >
              <div className="w-full h-full bg-[#8c78c7] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20">
                {/* Profile Photo */}
              <div className="h-1/2 w-full flex items-center justify-center bg-[#8c78c7]">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

                {/* User Details */}
                <div className="flex flex-col justify-center items-center p-6 h-1/2 text-center">
                  <h2 className="text-white text-2xl font-bold">
                    {user.username}
                  </h2>
                  <p className="text-white/70 mt-2">{user.bio}</p>

                  {/* Interests */}
                  {user?.interests?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {user.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1 bg-white/20 border border-white/30 text-white rounded-full text-sm shadow-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TinderCard>
          ))}
        </div>

        {/* Right Label */}
        <div className="absolute right-[-55px] top-1/2 rotate-90 text-green-400 font-semibold tracking-wide text-lg opacity-80">
          ADD →
        </div>
      </div>
    </div>
};

export default Connect;
