'use client'
import LoginForm from '@/components/loginForm';
import SignupForm from '@/components/signupForm';
import styled, { css } from "styled-components";
import * as React from 'react';


const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background: black;
  position: absolute;
  top: 50px;
  right: calc(50% - 100px);
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;
`;


const LoginModal = () => {
    const [modalShown , setModalShown] = React.useState("reg");
    const [isOpen, setOpen] = React.useState(false);
    
    const handleLoginClick = () => {
      setModalShown("login");
    }
   const handleRegClick = () => {
      setModalShown("reg");
    }


    return (
      <Container>
        <a href='#' onClick={() => setOpen(!isOpen)}> SIGN UP</a>
        {isOpen && (
          <>
            <ModalContainer>
              <Modal>
                {modalShown == "login" && (
                  <div>
                    <LoginForm />
                    <button onClick={handleRegClick} className="ring-2 mx-4">
                      Register{" "}
                    </button>
                  </div>
                )}
                {modalShown == "reg" && (
                  <div>
                    
                      <SignupForm />
                      <button onClick={handleLoginClick} className='ring-2 mx-4' >Login</button>
                  </div>
                )}
                <button onClick={() => setOpen(!isOpen)}>close window</button>
              </Modal>
            </ModalContainer>
          </>
        )}
      </Container>
    );
}

export default LoginModal