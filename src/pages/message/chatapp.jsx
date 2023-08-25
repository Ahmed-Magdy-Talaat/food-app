import React, { Component } from "react";
import "./styles/Chatappstyle.css";
import Chattitle from "./Chattitle";
import Mainchat from "./mainChat";
export default class Chatapp extends Component {
  state = {
    mychats: [
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: false,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla blaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.Lorem ipsum dolor sit amet, consecctetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
      {
        pic: "./pics/sora.jpg",
        name: "hepa Abdullah",
        lastmsg: "i have some bla bla bla",
        unseenMsgs: 0,
        messages: [
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
          {
            didIsendIt: true,
            time: "Thu Aug 24 2023 03:57:25",
            text: "i have some bla bla bla",
          },
        ],
      },
    ],
    activeChat: 0,
    showContactsstyle: {
      flag: false,
      style: { marginLeft: "0px" },
    },
  };

  showshats = () => {
    if (this.state.showContactsstyle.flag == false) {
      let temp = {
        flag: true,
        style: { marginLeft: "349px" },
      };
      this.setState({ shouldComponentUpdate: temp });
    } else {
      let temp = {
        flag: false,
        style: { marginLeft: "0px" },
      };
      this.setState({ shouldComponentUpdate: temp });
    }
  };
  setactiveChat = (ind) => {
    this.setState({ activeChat: ind });
  };
  addMsg = (newMsg) => {
    let newmsgs = this.state.mychats;
    newmsgs[this.state.activeChat].messages.push(newMsg);
    this.setState({});
  };

  render() {
    return (
      <>
        <div className="chatAppContainer">
          <div className="ChatsContainer" style={{}}>
            <div className="leftsideChats">
              {this.state.mychats.map((c, ind) => (
                <>
                  {ind === this.state.activeChat ? (
                    <>
                      <Chattitle
                        data={c}
                        ind={ind}
                        setactiveChat={this.setactiveChat}
                        active={1}
                      />
                    </>
                  ) : (
                    <>
                      <Chattitle
                        data={c}
                        ind={ind}
                        setactiveChat={this.setactiveChat}
                        active={0}
                      />
                    </>
                  )}{" "}
                </>
              ))}
            </div>
          </div>
          <div className="mainChat">
            <div
              className="goback"
              onClick={this.showshats}
              style={{ backgroundColor: "red", height: "150px" }}
            ></div>
            <Mainchat
              addMsg={this.addMsg}
              chat={this.state.mychats[this.state.activeChat]}
            />
          </div>
        </div>
      </>
    );
  }
}
