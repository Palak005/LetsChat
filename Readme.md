//Connecting Backend with Frontend

Installing react-router-dom
Wrapping App within <BrowserRouter> in Main.jsx

Setting up Route under Routes in App.jsx


//Fetching data
        setLoading(true);
        try{
            const res = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender}),
            })

            const data = await res.json();
            console.log(data);

        }catch(error){
            toast.error(error.message);
        } finally{
            setLoading(false);
        }


//Handling cors error : add proxy in the server in vite config file
  server:{
    port: 3000,
    proxy: {
      "/api":{
        target : "http://localhost:8080/",
      }
    }
  },


//Creating context for Authentication 
Creating AuthCotext in context folder
