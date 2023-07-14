import Image from "next/image";

   async function page () {
    const res = await fetch (
        'http://localhost:8000/post/getAllPost'
    );
     const data = await res.json()


     const imgpath = ''


  console.log(data)

   

    return (
        <div> this is going to be the page where user can see all the posts
        <div>
           {data && 
              [data].map((item , i) => (
                <div key={i}>
                    {data.message[i].dishName} <br />
                    {data.message[i].userId}   // will use this format for iterating over data
                    {data.message[i].dishPhoto}
                </div>
              ))}
        </div>
        </div>
    )
}

export default page