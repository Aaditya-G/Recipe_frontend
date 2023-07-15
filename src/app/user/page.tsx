"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { Interface } from "readline";
import Image from "next/image";
import Link from "next/link";
import Postcards from "@/components/Postcards";
import { useRouter } from "next/navigation";
import defaultPFP from '../../../public/default_pfp.svg'
import axios from "axios";
interface postCards {
  dishName: string;
  dishId: string;
  createdAt: string;
  userId: string;
  dishPhoto: string;
}
interface profileI {
  userId: string;
  name: string;
  bio: string;
  emailId: string;
  profilePhoto: string;
}
const page = () => {
  let [profile, setProfile] = useState<profileI>({});
  const [posts, setPosts] = useState<postCards[]>([]);

  const [profilePhotoExists, setProfilePhotoExists] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState<File|null>();


  
  const getProfile = async () => {
    let authtoken = sessionStorage.getItem("auth-token");
    let response1 = await fetch(`http://localhost:8000/auth/test_token`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        accept: "application/json",
        Authorization: `Token ${authtoken}`,
      },
    });
    let data1 = await response1.json();
    // console.log(data1[0])
    let response2 = await fetch(
      `http://localhost:8000/userProfile/getProfile/${data1[0]}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          accept: "application/json",
          Authorization: `Token ${authtoken}`,
        },
      }
    );
    let data2 = await response2.json();
    // console.log(data2.user_profile)
    // profile=data2.user_profile
    // console.log(profile.userId)
    setProfile(data2.user_profile);

    if (data2.user_profile.profilePhoto) {
      setProfilePhotoExists(true);
    }
    let response3 = await fetch(
      `http://localhost:8000/post/getUserPost/${data1[0]}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          accept: "application/json",
          Authorization: `Token ${authtoken}`,
        },
      }
    );
    let data3 = await response3.json();
    // console.log(data3)
    setPosts(data3.message);
  };

  useEffect(() => {
    getProfile();
  }, []);


  const uploadProfilePhoto = async () => {
    try {
      const token = sessionStorage.getItem("auth-token");
      const data = {
        profilePhoto
      };

      const response = await axios.put(
        "http://localhost:8000/userProfile/updateProfilePicture",
        data,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

    } catch (error) {
      console.log(error)
    }
  }

  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-pink-200 to-white w-100 h-screen px-40 justify-center items-center">
      <div className="bg-sky-950 w-6/7 m-auto h-1/2 rounded-lg flex flex-row">
        <div className="w-1/4 h-5/6 grid place-items-center">

          {profilePhotoExists ? (
            <img
              src={`http://localhost:8000${profile.profilePhoto}`}
              alt="profilePhoto"
              className="object-cover rounded-lg border-white border-solid border-2 mx-auto p-2 my-2"
            />
          ) : (
            <div>
  
            {/* // put  image svg here showing blank profile photo and an edit button to add the profile photo  */}
             


            </div>
          )}

         {/* <form onSubmit={(e) => {
          e.preventDefault();
            uploadProfilePhoto()
         }}>
           <input 
        type="file" 
        name="profile Photo" 
        placeholder="Upload profile picture"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setProfilePhoto(e.target.files[0])}}
        required
        />
        <button
          className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2"
          type="submit"
        >
         UPLOAD NEW PROFILE PICTURE
        </button>
         

         </form> */}


        </div>
        <div className="w-2/4 grid place-items-center">
          <h1 className="text-white text-2xl font-bold p-1 mx-auto my-2">
            userId: {profile.userId}
          </h1>
          <h1 className="text-white text-2xl font-bold p1 mx-auto my-2">
            userName: {profile.name}
          </h1>
          <h1 className="text-white text-2xl font-bold p-1 mx-auto my-2">
            EmailId: {profile.emailId}
          </h1>
        </div>
        <div className="w-1/4">
          <h1 className="text-white text-3xl font-extrabold mx-auto">Bio:</h1>
          <h1 className="text+white text-1xl font-bold mx-auto">
            {profile.bio}
          </h1>
        </div>
      </div>
      <Link
        className="text-black bg-blue-500 hower:bg-slate-500 p-2 rounded-full m-2"
        href={"/editProfile"}
      >
        Edit Profile
      </Link>
      <button
        onClick={() => router.push("/posts/new")}
        className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2"
      >
        CREATE NEW POST
      </button>
      <h1 className="text-4xl font-extrabold text-black p-1 mx-auto text-center">
        MY RECIPES
      </h1>
      <div className="flex flex-row p-2 ">
        {posts.map((Element: postCards) => {
          console.log(Element, "hello world");
          // return<h1>hello</h1>
          return (
            <Postcards
              key={Element.dishId}
              createdAt={Element.createdAt}
              dishId={Element.dishId}
              dishName={Element.dishName}
              userId={Element.userId}
              dishPhoto={Element.dishPhoto}
              id={""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
