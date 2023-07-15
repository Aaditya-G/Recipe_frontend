'use client'
import { useRouter } from "next/navigation"


const page = () => {

   const router = useRouter();
    router.push('/home')
    return (
        <div> 

        </div>
    )
}

export default page