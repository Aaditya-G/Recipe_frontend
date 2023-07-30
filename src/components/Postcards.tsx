'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface postCards{
    id : string,
    dishName:string,
    dishId:string,
    createdAt:string,
    userId:string,
    dishPhoto:string
}
const Postcards = ({dishName ,id, dishId,createdAt,userId,dishPhoto}:postCards) => {


const pic = dishPhoto

// console.log(pic)
  return (
    <div className='flex flex-col items-center bg-sky-950 rounded-lg border-black border-solid border-2 m-1 h-18'>

  <Image src={pic} alt={dishName} width={400} height={400} />


  <h1 className='font-extrabold text-2xl p-1 m-1 text-center uppercase'>
    {dishName}
  </h1>


  <div className='flex items-center text-1xl text-white'>
    By {userId}
  </div>


  <Link href={`posts/${dishId}`} className='text-black bg-white rounded'>
    Read more
  </Link>
</div>
  )
}

export default Postcards
