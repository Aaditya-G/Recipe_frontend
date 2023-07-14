'use client'
import { useRouter } from "next/navigation"


const page = () => {

   const router = useRouter();
   router.push('/home')         //no landing page for now

    return (
        <div> 
        </div>
    )
}

export default page