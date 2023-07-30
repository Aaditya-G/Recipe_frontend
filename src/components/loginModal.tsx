'use client'
import LoginForm from '@/components/loginForm';
import SignupForm from '@/components/signupForm';
import styled, { css } from "styled-components";
import * as React from 'react';


const LoginModal = () => {
    const [modalShown , setModalShown] = React.useState("login");
    const [isOpen, setOpen] = React.useState(false);
    
    const handleLoginClick = () => {
      setModalShown("login");
    }
   const handleRegClick = () => {
      setModalShown("reg");
    }
    const handleCloseClick = () => {
      setOpen(false);
    };
  


    return (
      <div className="container">
      <a href="#" onClick={() => setOpen(!isOpen)}>SIGN UP</a>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-black absolute top-[30vh] right-20vw border border-black p-6 min-h-200 rounded-xl">
            <button
                className="absolute top-0 right-0 m-2 text-2xl "
                onClick={handleCloseClick}
              >
                &times;
              </button>
              {modalShown === 'login' && (
                <div className='my-4'>
                  <LoginForm />
                  <button onClick={handleRegClick} className="mx-4 text-sm mt-4 text-slate-500">
                    Don't have an account yet ? click to register
                  </button>
                </div>
              )}
              {modalShown === 'reg' && (
                <div className='my-4'>
                  <SignupForm />
                  <button onClick={handleLoginClick} className="mx-4 text-sm mt-4 text-slate-500">
                    Already have an account ? click to login  
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
    );
}

export default LoginModal