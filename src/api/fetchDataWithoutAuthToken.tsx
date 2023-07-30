import axios from "axios";

export async function getDataWithoutAuthToken (url: string) {
    try {
      const response = await axios.get(url)
    return response
    } catch (e) {
       console.log(e)
    }
  }