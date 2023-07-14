'use client'
 
import { useParams, usePathname, useRouter } from 'next/navigation'
 

const Page = () => {
 

  const { postId } = useParams();


  return (
    <div>
      <h1>Page ID: {postId}</h1>
      {/* Rest of your component */}
    </div>
  );
};

export default Page;