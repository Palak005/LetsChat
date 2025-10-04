const checkLimit = async(req, res, next)=>{
    try{
        const user = req.user;
        
        //Renewing the swipe count
        const today = new Date().toDateString();
        const lastDate = user.lastSwipeDate? user.lastDate.toDateString() : null;

        if(lastDate != today){
            user.swipeCount = 0;
            user.lastSwipeDate = new Date();
            await user.save();
        }

        const plan = {
            free = 5,
            premium = Infinity
        }

        const limit = plan[user.subscription] || 5;

        if(user.swipeCount >= limit){
            return res.status(403).json{
                message : "Swipe limit reached for today. Upgrade your plan to continue."
            }
        }

        next();
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error checking swipe limit' });
    }
}

export default checkLimit;