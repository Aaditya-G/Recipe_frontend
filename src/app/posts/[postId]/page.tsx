"use client"
import Image from "next/image";
import "./style.css";
import { useParams, usePathname, useRouter } from "next/navigation";
import AddToCookBook from "@/components/addToCookbook";
import { getPostWithId } from "@/api/fetchPostWithId";
import { useEffect, useState } from "react";


const PostPage = () => {

  const [data, setData] = useState()

  const getPost = async () => {
    try {
      const {postId} = useParams();
      const response = await getPostWithId(postId)
      setData(response.message);
     return 0
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)

  // useEffect(() => {
  //   getPost()
  // }, []);
 
    // getPost()  //need to change this but abhi nahi ho raha hai  

  

  return (
    <div
      className="bg-gradient-to-r from-pink-200 to-white w-100 px-8 md:px-auto text-black"
      id="main"
    >
      <div className="header text-white">
        <div className="mt-8 grid grid-cols-4">
          <div className="col-span-1">
            <div className="img-circle">
              <Image src="" alt="" width={400} height={400} id="img" />
            </div>
            <div className="save-button">
                <AddToCookBook/>
            </div>
          </div>
          <div className="col-span-3">
            {/* <div className="grid grid-rows-3 gap-6">
              <div className="uppercase text-5xl row-auto text-center">{data.dishName}</div>
              <div className="row-auto">
                <div className="grid grid-cols-3">
                    <div className="col-span-1">
                        SERVINGS
                    </div>
                    <div className="col-span-1">
                        RATINGS
                    </div>
                    <div className="col-span-1">
                        COOKING TIME : {data.dishTime} mins
                    </div>
                </div>
                <div>
              <div className="row-auto"> {data.dishBio} </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PostPage;
