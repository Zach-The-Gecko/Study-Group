import React from "react";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.utils";
import styled from "styled-components";

const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavigationHeaderStyle = {
  fontSize: "2rem",
  fontFamily: "Courier New",
  fontWeight: "550",
};
const NavigationspanStyle = {
  fontSize: "1.5rem",
  fontFamily: "Courier New",
  fontWeight: "900",
  cursor: "pointer",
};

const Navigation = ({ currentUser }) => {
  return (
    <NavigationBar>
      <span style={NavigationHeaderStyle}>
        Hello!!! {currentUser.displayName}
      </span>
      <span style={NavigationspanStyle} onClick={() => auth.signOut()}>
        Sign Out
      </span>
    </NavigationBar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
