import { useState, useEffect } from "react";

const FriendsList = () => {
  // Example: Replace this with fetched data from backend
  const [friends, setFriends] = useState([
    { id: 1, name: "Alice Johnson", avatar: "https://via.placeholder.com/80" },
    { id: 2, name: "Bob Smith", avatar: "https://via.placeholder.com/80" },
    { id: 3, name: "Charlie Brown", avatar: "https://via.placeholder.com/80" },
  ]);

  // Unfriend function
  const handleUnfriend = (id) => {
    setFriends((prev) => prev.filter((friend) => friend.id !== id));
    // 🔗 later: make API call here to update DB
  };

  return (
    <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center">
      <div className="w-3/4 h-4/5 bg-[#2C2638] rounded-3xl p-8 overflow-y-auto shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Your Friends</h1>

        {friends.length === 0 ? (
            <div className="w-4/4 h-4/5 flex items-center justify-center">         
                <p className="text-gray-400 text-3xl text-center mt-10">You have no friends yet 👥</p>
            </div>
        ) : (
          <div className="flex flex-col gap-4">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between bg-[#3C364C] p-4 rounded-xl"
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
                  <span className="text-white font-medium">{friend.name}</span>
                </div>

                {/* Unfriend Button */}
                <button
                  onClick={() => handleUnfriend(friend.id)}
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
