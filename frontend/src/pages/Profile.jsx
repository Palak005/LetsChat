import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { set } from "mongoose";

const Profile = () => {
  const [currUser, setCurrUser] = useState(null);
  const loadScript = (src)=>{
      return new Promise((resolve)=>{
          const script = document.createElement('script');
          script.src = src;
          script.onload = ()=>{
              resolve(true);
          }
          script.onerror = ()=>{
              resolve(false);
          }

          document.body.appendChild(script);
      })  
  }

  const onPayment = async()=>{
      //create order
      try{
          const response = await axios.post("http://localhost:8080/api/payment/createOrder", {
              price: "5000",
          });

          const data = response.data;
          console.log(response.razorpay_payment_id);

          const paymentObject = new window.Razorpay({
              key : import.meta.env.VITE_RAZORPAY_KEY_ID,
              order_id : data.id,
              ...data,
              handler : async function(response){
                  const options = {
                      order_id : response.razorpay_order_id,
                      payment_id : response.razorpay_payment_id,
                      signature: response.razorpay_signature
                  }

                  const res = await axios.post("http://localhost:8080/api/payment/verifyPayment", options);
                  console.log(res.data);
                  if(res.data.success){

                      //updating user subscription

                      try{
                          const res = await axios.put("/api/user/edit-profile", {subscription : "Premium"}, {
                            withCredentials: true,
                          });

                          if(res.data?.user == null) throw new Error("Error while updating subscription");
              
                          toast.success('Subscription updated to Premium'); 
                          setCurrUser(res.data.user);      
                      }catch(error){
                          console.log(error);
                      }
                  }else{
                      toast.error('Payment failed');
                  }
              }
          });

          paymentObject.open();
      }catch(error){
          console.log(error);
      }
  }

  useEffect(()=>{
    console.log(import.meta.env.VITE_RAZORPAY_KEY_ID);
    // Loading script
      const load = async()=>{
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      }

    //Fetching user details
    const fetchUser = async ()=>{
      try{
        const {data} = await axios.get("/api/user/details");
        if(data?.user != null) setCurrUser(data.user);
        console.log(currUser);
      }
      catch(error){
        toast.error(error);
      }
    }

    fetchUser();
    load(); 
  }, []);

  return (
    currUser == null ? <div>Loading...</div> :
      <div className="w-screen h-screen bg-[#615D73] flex justify-center items-center">
          <Navbar/>
        {/* Main Container */}
        <div className="w-3/4 h-4/5 bg-gradient-to-br from-[#4A3F6B] to-[#6D54B5] border-r-[#9f91c6] rounded-4xl flex">
          {/* Left Section - Profile Photo */}
          <div className="w-1/3 h-full flex flex-col items-center justify-center rounded-l-4xl border-r-2 border-r-[#ffffff3f] p-6">
            <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-[#6D54B5] shadow-lg">
              <img
                src={currUser.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-white font-bold text-3xl m-4">{currUser.fullname}</h2>
            <p className="text-gray-300 text-lg">{currUser.location}</p>
                      {/* Action Buttons */}
            <div className="mt-6 w-full h-[40px] flex items-center justify-center">
              <Link to="edit" className="h-full w-full flex justify-center items-center rounded-2xl bg-white hover:bg-white/10 hover:text-white hover:border-2 font-bold text-[#6D54B5] text-lg hover:opacity-90 transition">
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Right Section - Bio + Details */}
          <div className="w-2/3 h-full flex flex-col justify-center gap-10 p-8 rounded-r-4xl">

            {/* Bio */}
            <div>
              <h3 className="text-4xl font-semibold text-white mb-2">Bio</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {currUser.bio}
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-4xl font-semibold text-white mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {currUser.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 bg-white/20 border-2 text-[15px] border-white/30 text-white rounded-full text-sm shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
              {/* Subscription Status */}
              <div className="bg-white/20 border-2 border-white/30 p-4 rounded-2xl shadow-md mt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Subscription Status</h3>
              
              {/* Plan Info */}
              <p className="text-gray-300 text-[18px]">
                  Current Plan: <span 
                    className="px-4 py-1 bg-[#6D54B5] text-white rounded-full text-sm shadow-sm">{currUser.subscription}</span>
              </p>

              {currUser.subscription === "Premium" ? null : 
                    ( 
                      <><p className="text-gray-300 mt-3 text-[18px]">
                          Subscription Price: <span className="font-semibold">₹5000</span>
                      </p>

                      <button 
                        onClick={onPayment}
                        className="text-[15px] mt-4 w-full bg-[#6D54B5] text-white py-2 rounded-xl hover:opacity-90 transition text-xl font-bold hover:bg-[#392b54] hover:text-amber-50">
                          Upgrade Now
                      </button></>
                    )
              }
              </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
