import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Fetching user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user/details");
        if (data?.user != null) setFormData(data.user);
      } catch (error) {
        toast.error("Failed to fetch user details");
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("/api/user/edit-profile", formData, {
        withCredentials: true,
      });

      toast.success("Profile updated successfully");
      navigate("/profile");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return formData == null ? (
    <div>Loading...</div>
  ) : (
    <div className="w-screen h-screen bg-gradient-to-br from-[#736E8A] via-[#615D73] to-[#8A85A6] flex justify-center items-center p-6">
      <div className="w-2/3 mt-[70px] max-w-3xl bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 p-10">
        <h1 className="text-4xl font-bold text-white mb-7 text-center">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          {/* Full Name + Location */}
          <div className="flex gap-3">
            <label className="flex flex-col flex-1">
              <span className="font-semibold text-lg mb-1">Full Name</span>
              <input
                type="text"
                name="fullname"
                value={formData.fullname || ""}
                onChange={handleChange}
                className="bg-white/20 border-2 border-white/30 rounded-2xl p-3 text-white text-lg placeholder-white/60"
                placeholder="Enter your full name"
              />
            </label>

            <label className="flex flex-col flex-1">
              <span className="font-semibold text-lg mb-1">Location</span>
              <input
                type="text"
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                className="bg-white/20 border-2 border-white/30 rounded-2xl p-3 text-white text-lg placeholder-white/60"
                placeholder="Enter your location"
              />
            </label>
          </div>

          {/* Bio */}
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-1">Bio</span>
            <textarea
              name="bio"
              value={formData.bio || ""}
              onChange={handleChange}
              className="bg-white/20 border-2 border-white/30 rounded-2xl p-3 text-white text-lg placeholder-white/60 resize-none"
              placeholder="Write something about yourself"
              rows="3"
            />
          </label>

          {/* Interests */}
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-1">Interests</span>
            <input
              type="text"
              name="interests"
              value={formData.interests || ""}
              onChange={handleChange}
              className="bg-white/20 border-2 border-white/30 rounded-2xl p-3 text-white text-lg placeholder-white/60"
              placeholder="e.g. music, coding, sports"
            />
          </label>

          {/* Avatar */}
          <label className="flex flex-col">
            <span className="font-semibold text-lg mb-1">Profile Picture</span>
            <input
              type="file"
              name="avatar"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }))
              }
              className="bg-white/20 border-2 border-white/30 rounded-2xl p-2 text-white text-lg file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-white/30 file:text-white hover:file:bg-white/50 transition-all"
            />
          </label>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-2xl border-0 bg-white text-[#6D54B5] font-bold text-lg hover:bg-[#392b54] hover:text-white transition-all duration-300 shadow-lg"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
