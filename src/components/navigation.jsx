import React from "react";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.utils";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GroupChatIcon from "../static/group-chat-icon.png";
import PrivateChatIcon from "../static/private-chat-icon.png";

// Going to add Icons instead of words when screen gets smaller

const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  color: #fff;
  padding: 1em 2em;
`;
const NavigationHeading = styled.span`
  font-size: 2em;
  font-weight: 100;
  margin-right: 5em;
`;
const NavigationText = styled(Link)`
  font-size: 1.5em;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  &::before {
    content: ${(props) => `"${props.text}"`};
  }
  @media only screen and (max-width: 60000px) {
    &::before {
      content: ${(props) => `url("${props.img}")`};
    }
  }
`;
const SignOut = styled.span`
  color: tomato;
  font-size: 1.5em;
  cursor: pointer;
`;

const Navigation = ({ currentUser }) => {
  return (
    <NavigationBar>
      <NavigationHeading>Hello, {currentUser.displayName}</NavigationHeading>
      <NavigationText to="/home" />
      <NavigationText to="/group-chat" img={GroupChatIcon} text="Group Chat" />
      <NavigationText
        to="/private-chat"
        img={PrivateChatIcon}
        text="Private Chats"
      />
      <SignOut onClick={() => auth.signOut()}>Sign Out</SignOut>
    </NavigationBar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
