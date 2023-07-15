'use client'
import { useRouter } from "next/navigation"


const page = () => {

   const router = useRouter();

    return (
        <div> this is going to be the user dashboard



         <button 
         onClick={() => router.push('/posts/new') }
         className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2">
            CREATE NEW POST
         </button>




        </div>
    )
}

export default page