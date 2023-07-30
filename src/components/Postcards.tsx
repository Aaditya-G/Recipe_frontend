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
    <div className='inline-flex flex-col items-center bg-sky-950 rounded-lg border-black border-solid border-2 m-1 h-18'>
  {/* Image */}
  <Image src={pic} alt={dishName} width={100} height={400} />

  {/* Dish Name */}
  <h1 className='font-extrabold text-2xl p-1 m-1 text-center uppercase'>
    {dishName}
  </h1>

  {/* User Symbol */}
  <div className='flex items-center'>
    <h1 className='text-1xl text-white'>{userId}</h1>
  </div>

  {/* Read More Link */}
  <Link href={`posts/${dishId}`} className='text-black bg-white rounded'>
    Read more
  </Link>
</div>
  )
}

export default Postcards
