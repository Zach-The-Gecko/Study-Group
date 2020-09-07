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
const MicrosoftIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const SignInPage = () => (
  <SignIn>
    <button onClick={signInWithMicrosoft}>
      <MicrosoftIcon src={MicrosoftIconImage} />
      Sign In
    </button>
  </SignIn>
);

export default SignInPage;
