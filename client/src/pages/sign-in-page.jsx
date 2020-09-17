import React from "react";
import { signInWithMicrosoft } from "../firebase/firebase.utils";
import MicrosoftIconImage from "../static/microsoft-icon.png";
import styled from "styled-components";

const SignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const SignInButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 1.2rem 2rem;
  color: white;
  background: #212121;
  cursor: pointer;
`;
const MicrosoftIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const SignInPage = () => (
  <SignIn>
    <SignInButton onClick={signInWithMicrosoft}>
      <MicrosoftIcon src={MicrosoftIconImage} />
      Sign In
    </SignInButton>
  </SignIn>
);

export default SignInPage;
