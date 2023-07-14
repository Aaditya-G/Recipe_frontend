'use-client'
import React from "react";
import axios from 'axios';


const LoginForm = () => {
    

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const login = async () => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login' , {
                username,
                password
            });

            const token = response.data.token;
            
            sessionStorage.setItem('auth-token' , token)
            window.location.reload();
        } catch (error) {
            console.error(error);
            throw new Error('Login failed');
        }  
       
        }
        // fetch("http://localhost:8000/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username,
        //         password
        //     }),
        //     headers: {
        //         "content-type": "application/json",
        //       },
        //     }).catch((e) => console.log(e));


  return (
    <div>
      <form  onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input 
        type="text" 
        name="username" 
        value={username} 
        placeholder="username"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input 
        type="text" 
        name="password" 
        placeholder="password" 
        value={password}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    
  )
}

export default LoginForm