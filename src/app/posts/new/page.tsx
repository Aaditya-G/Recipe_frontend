"use client";
import React from "react";
import axios from "axios";
import getLoginStatus from "@/utilites/getLoginStatus";
import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter()
 
  const checkLogin = async ()=> {
    const response = await getLoginStatus()
    if (!response) {
      window.location.href= "http://localhost:3000/home";    }
  }

  checkLogin() 
 


  const [dishName, setDishName] = React.useState("");
  const [dishBio, setDishBio] = React.useState("");
  const [dishCuisine, setDishCuisine] = React.useState("");
  const [dishTime, setDishTime] = React.useState("");
  const [dishPhoto, setDishPhoto] = React.useState("");

  const upload = async () => {
    try {
      const token = sessionStorage.getItem("auth-token");

      const data = {
        dishName,
        dishBio,
        dishCuisine,
        dishTime,
        dishPhoto,
      };


      const response = await axios.post(
        "http://localhost:8000/post/create",
        data,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
      throw new Error("Post failed");
    }
  };

  return (
    <div>
      {" "}
      this is going to be the page where user can upload a new post
      <form
        onSubmit={(e) => {
          e.preventDefault();
          upload();
        }}
      >
         <input 
        type="text" 
        name="dish Name" 
        value={dishName} 
        placeholder="Title of your dish"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setDishName(e.target.value)}
        required
        />
        <input 
        type="text" 
        name="dish Bio" 
        value={dishBio} 
        placeholder="Put your content here"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setDishBio(e.target.value)}
        required
        />
        <input 
        type="text" 
        name="dish Cuisine" 
        value={dishCuisine} 
        placeholder="Cuisine of your dish"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setDishCuisine(e.target.value)}
        required
        />
        <input 
        type="number" 
        name="dish time" 
        value={dishTime} 
        placeholder="time it would take to prepare this dish"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setDishTime(e.target.value)}
        required
        />
         <input 
        type="file" 
        name="dish Photo" 
        value={dishPhoto} 
        placeholder="Upload image of your dish"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setDishPhoto(e.target.value)}
        required
        />
        <button
          className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2"
          type="submit"
        >
          CREATE NEW POST
        </button>
      </form>
    </div>
  );
};

export default page;
