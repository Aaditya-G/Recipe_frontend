'use client';
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const AddToCookBook = () => {
  const { postId } = useParams();
//   const token = sessionStorage.getItem("auth-token");
  
//   const token =  '8aa2bb9efacee868d83ac03960e12f164d300e51'
  const like = async () => {
    try {
        const token = sessionStorage.getItem("auth-token");
      const data = {};

      const response = await axios.post(
        `http://localhost:8000/likes/onClick/${postId}`,
        data,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getLikeStatus = async () => {
    const token = sessionStorage.getItem("auth-token");
    try {
        const response = await axios.get(
            `http://localhost:8000/likes/getLikeStatus/${postId}`, 
            {
              headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
              },
            }
            )
            console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
 
  return (
    <div>
      <div className="order-2 md:order-3 ">
        <div className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white text-center rounded-xl">
          <Link href="#" onClick={like}>
            ADD TO COOKBOOK
          </Link>
         
        </div>
      </div>
      <button onClick={getLikeStatus}> GET STATUS </button>
    </div>
  );
};

export default AddToCookBook;
