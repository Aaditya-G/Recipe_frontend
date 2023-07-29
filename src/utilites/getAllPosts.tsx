'use-client'
import { getDataWithoutAuthToken } from "@/api/fetchDataWithoutAuthToken";

export default async function getAllPost() {
	try {
        const data = await getDataWithoutAuthToken('http://localhost:8000/post/getAllPost');
        console.log(data?.data.message)
		return data;
        
	  } catch (e) {
		console.log(e);
	  }
		  
}