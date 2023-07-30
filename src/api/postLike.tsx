import axios from "axios";

export async function postLike (postId :string, data:string, token:string | null) {
    try{
    const response = await axios.post(
        `http://localhost:8000/likes/onClick/${postId}`,
        data,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response
    } catch (error) {
      console.log(error);
    }
  }