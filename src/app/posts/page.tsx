import Image from "next/image";

   async function page () {
    const res = await fetch (
        'http://localhost:8000/post/getAllPost'
    );
     const data = await res.json();

     let imgurl = ''
     data && [data].map((item , i) => (
        imgurl = "http://localhost:8000" + data.message[i].dishPhoto
     ))


  console.log(data)
  console.log(imgurl)

   

    return (
        <>

        <div>
        {data && 
              [data].map((item , i) => (
                <div key={i}>
                    {data.message[i].dishName} <br />
                    {data.message[i].userId}   // will use this format for iterating over data
                    {data.message[i].dishPhoto}
                    <Image src = {imgurl}
                     alt= ""
                      width={800} 
                      height={400} />
                </div>
             

              ))}
        </div>
         
    
        
        </>
       
    )
}

export default page