'use client'
import LoginForm from '@/components/loginForm';
import axios from 'axios';
import * as React from 'react';


const page = () => {

    const [isShown, setIsShown] = React.useState(false);

    const handleClick = () => {
      setIsShown(current => !current);
    }

    return (
        <div>
            Home page view
            <button onClick={handleClick} className='ring-2 mx-4' >Like</button>
            {isShown && (
        <div>
          <h2>    <LoginForm /> </h2>
        </div>
      )}
        
        </div>
   
    )
}

export default page