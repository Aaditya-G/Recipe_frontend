export default async function getLoginStatus() {
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
			return true
		  }
		  else{
			return false
		  }
		}
		catch(e){
			console.log(e)
		}
		  
	}
