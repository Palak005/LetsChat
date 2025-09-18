import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center">
        <Navbar/>
      {/* Main Container */}
      <div className="w-3/4 h-4/5 bg-[#2C2638] rounded-3xl flex">
        {/* Left Section - Profile Photo */}
        <div className="w-1/3 h-full flex flex-col items-center justify-center bg-[#3C364C] rounded-l-3xl p-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#6D54B5] shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white font-bold text-2xl mt-4">John Doe</h2>
          <p className="text-gray-300">📍 New Delhi, India</p>
                    {/* Action Buttons */}
          <div className="mt-6">
            <button className="w-[150px] bg-[#6D54B5] text-white py-3 rounded-xl hover:opacity-90 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Right Section - Bio + Details */}
        <div className="w-2/3 h-full flex flex-col justify-center gap-10 p-8 rounded-r-3xl">

          {/* Bio */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-2">Bio</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about technology and building meaningful connections.  
              Love traveling, music, and photography. Always curious to learn new things 🚀
            </p>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Tech", "Travel", "Music", "Photography", "Fitness"].map((interest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 bg-[#6D54B5] text-white rounded-full text-sm shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
            {/* Subscription Status */}
            <div className="bg-[#3C364C] p-4 rounded-2xl shadow-md mt-4">
            <h3 className="text-xl font-semibold text-white mb-2">Subscription Status</h3>
            
            {/* Plan Info */}
            <p className="text-gray-300">
                Current Plan: <span className="font-semibold text-[#6D54B5]">Free</span>
            </p>
            <p className="text-gray-300 mt-1">
                Renewal Date: <span className="font-semibold">–</span>
            </p>

            {/* Upgrade Button */}
            <button className="mt-4 w-full bg-[#6D54B5] text-white py-2 rounded-xl hover:opacity-90 transition">
                Upgrade Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
