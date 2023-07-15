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
import LoginForm from './loginForm';


const Navbar = () => {
	const [loginStatus,setLoginStatus]=useState(true)
	const [showAlert, setShowAlert] = useState(false);
	const router = useRouter()
    	
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

	const handleAlert = () => {
		setShowAlert(true);
	  };


	useEffect(()=>{
		getLoginStatus()
	},[loginStatus])

	useEffect(() => {
		if (showAlert) {
		  alert('You need to login or register first!');
		  setShowAlert(false); // Reset the state after showing the alert
		}
	  }, [showAlert]);

  return (
    <>
	
    <nav className="bg-gradient-to-r from-pink-200 to-white w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
	<Image
	  src={logo}
	  alt="logo"
	  height={60}
	  />
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            { loginStatus ? ( <ul className="flex font-semibold justify-between">
                
				<li className="md:px-4 md:py-2 hover:text-black "><a href="/home">Home</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/user">Profile</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/posts">MyCookBook</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="/posts/new">Add Recipes</a></li>
				
			</ul>) : <ul className="flex font-semibold justify-between">
                
				<li className="md:px-4 md:py-2 text-black "><a href="/home">Home</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="#" onClick={handleAlert}> Profile</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="#" onClick={handleAlert}>MyCookBook</a></li>
				<li className="md:px-4 md:py-2 hover:text-black"><a href="#" onClick={handleAlert}>Add Recipes</a></li>
				
			</ul>
}
		</div>
		<div className="order-2 md:order-3 ">
			<div className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white rounded-xl flex items-center gap-2">
               
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
					}}>LOGOUT
					
					</Link>):
						<LoginModal/>
				}
            </div>
		</div>
	</div>
</nav>
</>
  )
}

export default Navbar