'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface postCards{
    dishName:string,
    dishId:string,
    createdAt:string,
    userId:string,
    dishPhoto:string
}
const Postcards = ({dishName,dishId,createdAt,userId,dishPhoto}:postCards) => {
  return (
    <div className=' inline bg-blue-950 rounded-lg border-black border-solid border-2 m-1 h-18 '>
         <h1 className='font-extrabold text-2xl p-1 m-1'>{dishName}</h1>
         <Image src={`http://localhost:8000${dishPhoto}`} alt={dishName} width={100} height={1000} />
         <h1 className='text-1xl text-white m-1 '>dishId: {<Link className='text-blue-500' href={'#'}>{dishId}</Link>}</h1>
         <h1 className='text-1xl text-white m-1'>PostedAt:{createdAt}</h1>
         <h1 className='text-1xl text-white m-1'>PostedBy:{<Link href={'#'} className='text-blue-500'>{userId}</Link>}</h1> 
         <Link href="#" className='text-black bg-white rounded '>Readmore</Link>
     </div>
  )
}

export default Postcards
