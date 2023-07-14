'use client';
import React from 'react'
import {useState,useEffect} from 'react'
import Image from 'next/image';
import logo from '../../public/logo.svg'
import Link from 'next/link';
// Token 8aa2bb9efacee868d83ac03960e12f164d300e51
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import LoginModal from './loginModal';
const Navbar = () => {
	const [loginStatus,setLoginStatus]=useState(false)
	const router = useRouter()
    
	const pathname = usePathname()
	
	const getLoginStatus=async()=>{
		try{
		let authtoken =sessionStorage.getItem('auth-token')
		let response;
		if(authtoken){
			 response = await fetch('http://localhost:8000/auth/test_token', {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode:'cors',
			headers: {
			  "accept": "application/json",
			  "Authorization":`Token ${authtoken}`
			}, 
		  });
		}
		else{
		    response = await fetch('http://localhost:8000/auth/test_token', {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode:'cors',
			headers: {
			  "accept": "application/json",
			  "Authorization":`Token ${authtoken}`
			}, 
		  });
		}
		  console.log(response.status)
		  if(response.status==200){
			setLoginStatus(true)
			
		  }
		  else{
			setLoginStatus(false)
		  }
		}
		catch(e){
			console.log(e)
		}
		  
	}
	useEffect(()=>{
		getLoginStatus()
	},[loginStatus])

  return (
    <>
	
    <nav className="bg-gradient-to-r from-pink-200 to-white w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
	<Image
	  src={logo}
	  alt="logo"
	  height={60}
	  />
		<div className="text-pink-600 md:order-1">
	
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
                
				<li className="md:px-4 md:py-2 text-black "><a href="/home">Home</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/user">Profile</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/posts">MyCookBook</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/about">About Us</a></li>
				
			</ul>
		</div>
		<div className="order-2 md:order-3 ">
			<button className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2">
               
                {
					loginStatus? (<Link href='#' onClick={()=>{
						try{
							sessionStorage.removeItem('auth-token')
							getLoginStatus()
							router.push('/')
						}
						catch(e){
							console.log(e)
						}
					}}>LogOut
					
					</Link>):
						<LoginModal/>
				}
            </button>
		</div>
	</div>
</nav>
</>
  )
}

export default Navbar