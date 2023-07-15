'use client';
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Postcards from "@/components/Postcards";
import { useRouter } from "next/navigation"
import getLoginStatus from "@/utilites/getLoginStatus";
interface postCards{
    id : string,
    dishName:string,
    dishId:string,
    createdAt:string,
    userId:string,
    dishPhoto:string
  }
interface profileI{
    userId:string,
    name:string,
    bio:string,
    emailId:string,
    profilePhoto:string
}
const page = () => {


  const checkLogin = async ()=> {
    const response = await getLoginStatus()
    if (!response) {
      window.location.href= "http://localhost:3000/home";    }
  }

  checkLogin() 


  
    let [profile,setProfile]=useState<profileI>({})
    const [posts,setPosts]=useState<postCards[]>([])
    // let profile:profileI;
    const getProfile=async()=>{
        let authtoken =sessionStorage.getItem('auth-token')
        let response1 = await fetch(`http://localhost:8000/auth/test_token`, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode:'cors',
                headers: {
                  "accept": "application/json",
                  "Authorization":`Token ${authtoken}`
                }, 
              });
          let data1=await response1.json()
          // console.log(data1[0])
          let response2=await fetch(`http://localhost:8000/userProfile/getProfile/${data1[0]}`,{
            method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode:'cors',
                headers: {
                  "accept": "application/json",
                  "Authorization":`Token ${authtoken}`
                }, 
              }
          )
          let data2=await response2.json()
          console.log(data2.user_profile)
          setProfile(data2.user_profile)
        //   profile=data2.user_profile
          // console.log(profile)
          let response3 = await fetch(`http://localhost:8000/post/getUserLikedPost/${data1[0]}`, {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode:'cors',
			headers: {
			  "accept": "application/json",
			  "Authorization":`Token ${authtoken}`
			}, 
		  });
      let data3=await response3.json()  
      console.log(data3)
      setPosts(data3.message)
  }
  useEffect(()=>{

    getProfile()
  },[])
    
    
    const router = useRouter();
    
    
    return (
        <div className="bg-gradient-to-r from-pink-200 to-white w-100 h-screen p-0.5 justify-center items-center" > 
          <h1 className="text-4xl font-extrabold text-black p-1 mx-auto text-center">SAVED RECIPES</h1>
          <div className="grid grid-cols-3 gap-4 p-2 ">
        {
          posts.map((Element:postCards)=>{
            console.log(Element,'hello world')
            // return<h1>hello</h1>
           return <Postcards key={Element.id} createdAt={Element.createdAt} dishId={Element.dishId} dishName={Element.dishName} userId={Element.userId} dishPhoto={Element.dishPhoto} id={Element.id}/>
          })
        }
            
            
      </div>
           
        </div>
    )
}

export default page