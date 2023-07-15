'use client'

import * as React from 'react';
import { useState,useEffect } from "react";
import Postcards from "@/components/Postcards";
interface postCards{
  dishName:string,
  dishId:string,
  createdAt:string,
  userId:string,
  dishPhoto:string
}



const page = () => {
   

  const [posts,setPosts]=useState<postCards[]>([])
  // let posts:object[];
  const getAllReciepes=async()=>{
    try{
    let authtoken =sessionStorage.getItem('auth-token')
    let response = await fetch('http://localhost:8000/post/getAllPost', {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode:'cors',
			headers: {
			  "accept": "application/json",
			  "Authorization":`Token ${authtoken}`
			}, 
		  });
      let data=await response.json()
      
      setPosts(data.message)
      console.log(typeof(data.message))
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
     getAllReciepes()
  },[])


    return (
      <div className="bg-gradient-to-r from-pink-200 to-white w-100 h-100 p-0.5 justify-center items-center">
      <div className="bg-blue-950 w-18/19 h-1/2 items-center justify-center rounded-lg mx-auto flex-row flex">
        <div className="w-33% p-4 ">
          <h1 className="font-extrabold text-5xl p-2">Discover Simple</h1>
          <h1 className="font-extrabold text-4xl p-2">Delicious, And</h1>
          <h1 className="font-extrabold text-4xl text-pink-400 p-2">
            Fast Recipes
          </h1>
          <h1 className="text-1xl ">
            A recipe is soulness. The essence of the recipe{" "}
          </h1>
          <h1 className="text-1xl ">A must come from you, the cook.</h1>
          <button className="bg-white rounded-lg hover:bg-slate-50 p-2 text-black m-2">
            Read more
          </button>
        </div>

        <div className="w-80 p-2 ">
          <img src="" alt="cook photo" />
        </div>
        <div className="w-60 p-2">
          <h1 className="font-extrabold text-3xl p-2">Top Receipies</h1>
          <h1 className="text-2xl ">
            A receipe is soulless.The essence of the recipe must come from you
            the cook
          </h1>
          <button className="bg-white rounded-lg hover:bg-slate-50 p-2 text-black m-2">
            check our recipe
          </button>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/3">
          <h1 className="font-extrabold text-4xl p-2 text-black w-1/2  m-auto">
            Cusine
          </h1>
          <div className="mx-auto">
            <button className="block text-black rounded-full border-black w-1/2 bg-slate-100 p-1  m-1 border-black border-solid border-2">
              Indian
            </button>
            <button className="block text-black rounded-full border-black w-1/2 bg-slate-100 p-1 m-1 border-black border-solid border-2">
              Chineese
            </button>
            <button className="block text-black rounded-full border-black w-1/2 bg-slate-100 p-1 m-1 border-black border-solid border-2">
              French
            </button>
            <button className="block text-black rounded-full border-black w-1/2 bg-slate-100 p-1 m-1 border-black border-solid border-2">
              Italian
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <input placeholder="Search reacipe and more..." className="m-auto font-lg rounded-lg border-black bg-white border-solid border-2 p-2 text-black my-4"/>
        </div>
        <div className="w-1/3">
        <h1 className="text-2xl text-blue-950">
            Get top dishes here
          </h1>
          
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-black p-1 mx-auto text-center">Recipies</h1>

      <div className="flex flex-row p-2 ">
        {
          posts.map((Element:postCards)=>{
            console.log(Element,'hello world')
            // return<h1>hello</h1>
           return <Postcards key={Element.dishId} createdAt={Element.createdAt} dishId={Element.dishId} dishName={Element.dishName} userId={Element.userId} dishPhoto={Element.dishPhoto}/>
          })
        }
      </div>
    </div>
    );
}

export default page