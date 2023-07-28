'use client'
import Image from 'next/image';
import * as React from 'react';
import { useState,useEffect } from "react";
import Postcards from "@/components/Postcards";
import cookPhoto from "../../../public/cook.svg"
import foodPhoto1 from "../../../public/header_food_frame.svg"
import search from "../../../public/Search.svg"
import { BsSearch } from 'react-icons/bs';

interface postCards{
  id: string,
  dishName:string,
  dishId:string,
  createdAt:string,
  userId:string,
  dishPhoto:string
}



const HomePage = () => {
   

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
      <div className="bg-gradient-to-r from-pink-200 to-white w-100 h-100 px-40 justify-center items-center">
      <div className="bg-sky-950 w-18/19 h-1/2 items-center justify-around p-10 rounded-3xl mx-auto flex-row flex">
      
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 p-2">
        <div className="font-extrabold text-5xl">Discover Simple</div>
          <div className="font-extrabold text-5xl ">Delicious, And</div>
          <div className="font-extrabold text-5xl text-pink-600">
            Fast Recipes
          </div>
          <h1 className="text-1xl pt-2 ">
            A recipe is soulless. The essence of the recipe
          </h1>
          <h1 className="text-1xl pb-2">A must come from you, the cook.</h1>
          <div className="py-2">

          <button className="bg-white rounded-lg hover:bg-slate-50 p-2 text-black m-2">
            Read more
          </button>
          </div>
          <div className='flex-row flex pt-5'>
            <Image src={foodPhoto1} alt="" />
          </div>
        </div>
        <div className="col-span-1">
        <Image src={cookPhoto} alt="cook photo" width={500} height={400}     />

          </div>
         

      </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-10">
        <div className="col-span-1">
          <h1 className="font-extrabold text-4xl p-2 text-black w-1/2  m-auto">
            Cuisines
          </h1>
          <div className="grid-rows-4 pl-24">

            <div className="block text-black rounded-full border-black w-1/2 bg-transparent p-1  m-1 border-black border-solid border-2 text-center hover:bg-sky-950 hover:text-white">
              <a href="#">
              Indian Cuisine
              </a>
            </div>
            
           
            <div className="block text-black rounded-full border-black w-1/2 bg-transparent p-1  m-1 border-black border-solid border-2 text-center hover:bg-sky-950 hover:text-white">
              <a href="#">
              Indian Cuisine
              </a>
            </div>
            <div className="block text-black rounded-full border-black w-1/2 bg-transparent p-1  m-1 border-black border-solid border-2 text-center hover:bg-sky-950 hover:text-white">
              <a href="#">
              Indian Cuisine
              </a>
            </div>
            <div className="block text-black rounded-full border-black w-1/2 bg-transparent p-1  m-1 border-black border-solid border-2 text-center hover:bg-sky-950 hover:text-white">
              <a href="#">
              Indian Cuisine
              </a>
            </div>
            <div className="block text-black rounded-full border-black w-1/2 bg-transparent p-1  m-1 border-black border-solid border-2 text-center hover:bg-sky-950 hover:text-white">
              <a href="#">
              Indian Cuisine
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-20">
        <form action="" className="w-full max-w-md">
      <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
        <BsSearch className="w-5 h-5 absolute ml-3 pointer-events-none"/>
        <input
          type="text"
          name="search"
          placeholder="Search recipes"
          className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
      </div>
    </form>
       
        </div>
        <div className="col-span-1">
        <h1 className="text-2xl text-blue-950">
            Get top dishes here
          </h1>
          
        </div>
      </div>
      
      <h1 className="text-4xl font-extrabold text-black p-1 mx-auto text-center">Recipies</h1>

      <div className="grid grid-cols-3 gap-4 p-2 ">        {
          posts.map((Element:postCards)=>{
            console.log(Element,'hello world')
            // return<h1>hello</h1>
           return <Postcards key={Element.dishId} createdAt={Element.createdAt} dishId={Element.dishId} dishName={Element.dishName} userId={Element.userId} dishPhoto={Element.dishPhoto} id={Element.id}/>
          })
        }
      </div>
    </div>
    );
}

export default HomePage