'use client'
import { postData } from "@/api/postDatawithBody"

export async function createNewProfile(body:string) {
   try {
    const authtoken = sessionStorage.getItem('auth-token');
    const response = await postData ('http://localhost:8000/userProfile/createProfle' , authtoken , body)
   } catch (error) {
    console.log(error)
   }
}