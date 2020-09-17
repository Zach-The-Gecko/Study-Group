import React from "react";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.utils";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GroupChatIcon from "../static/group-chat-icon.png";
import PrivateChatIcon from "../static/private-chat-icon.png";
import HomeIcon from "../static/home-icon.png";
import SignOutIcon from "../static/sign-out-icon.png";

// Note to Self --> Going to add Icons instead of words when screen gets smaller

const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #212121;
  padding: 1em 2em;
`;
const NavigationHeading = styled.span`
  font-size: 2em;
  font-weight: 100;
`;
const NavigationText = styled(Link)`
  font-size: 1.5em;
  cursor: pointer;
  text-decoration: none;
  color: #212121;
  &::before {
    content: ${(props) => `"${props.text}"`};
    color: ${(props) => (props.signOut ? "Tomato" : "")};
  }
  @media only screen and (max-width: 1000px) {
    &::before {
      content: ${(props) => `url("${props.img}")`};
      padding: 10px;
    }
  }
`;

const Navigation = ({ currentUser }) => {
  return (
    <NavigationBar>
      <NavigationHeading>Hello, {currentUser.displayName}</NavigationHeading>
      <NavigationText to="/home" text="Home" img={HomeIcon} />
      <NavigationText to="/group-chat" img={GroupChatIcon} text="Group Chat" />
      <NavigationText
        to="/private-chat"
        img={PrivateChatIcon}
        text="Private Chats"
      />
      <NavigationText
        onClick={() => auth.signOut()}
        text="Sign Out"
        img={SignOutIcon}
        signOut
      />
    </NavigationBar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
