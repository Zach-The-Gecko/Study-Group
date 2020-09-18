import L from "../L";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getUserData } from "../firebase/firebase.utils";

const onClick = () => {
  axios({
    url: "get-data",
    method: "POST",
    data: {
      randomData: "THIS IS VERY RANDMO",
      meaningOfLife: 4,
    },
  }).then((data) => console.log(data));
};

if (true === false) onClick();

class GroupChatPage extends React.Component {
  constructor() {
    super();
    this.state = {
      chatData: [],
    };
  }
  async componentDidMount() {
    const resData = await axios({
      url: "get-chats",
      method: "GET",
    });
    const chatData = resData.data.chats;
    await chatData.map(async (chat, num) => {
      const authorData = await getUserData(chat.authorID);
      const authorName = authorData.displayName;
      chatData[num].author =
        chat.authorID === this.props.currentUserId ? "You" : authorName;
    });
    this.setState({ chatData });
  }
  render() {
    return (
      <div>
        {this.state.chatData.map((data) => {
          console.log(this.state.chatData);
          return (
            <L key={data.messageID}>
              <h1 key={data.messageID}>
                {data.message} - {data.author}
              </h1>
            </L>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(GroupChatPage);
