import "./styles/Chatappstyle.css";
const Chattitle = (probs) => {
  let activeStyle = {};
  if (probs.active) {
    activeStyle = {
      display: "flex",
      backgroundColor: "rgba(28, 28, 28, 0.05)",
    };
  }

  return (
    <>
      <div
        style={activeStyle}
        className="pic-name-lastmsg"
        onClick={() => {
          probs.setactiveChat(probs.ind);
        }}
      >
        <div>
          <img
            src={require(`${probs.data.pic}`)}
            alt=""
            className="pic_name_lastmsg_Pic ChatterPic"
          />
        </div>
        <div className="name-lastmsg">
          <div className="chatterName"> {probs.data.name}</div>
          <div className="lastMsg">
            {" "}
            {probs.data.messages[probs.data.messages.length - 1].text}
          </div>
        </div>

        {/* <div className="time-accumulated-messages">
          <div className="time lastMsg ">
            {" "}
            {probs.data.messages[probs.data.messages.length - 1].time.slice(
              16,
              24
            )}
          </div>

          {probs.data.unseenMsgs !== 0 && (
            <div className="accMsgs"> {probs.data.unseenMsgs} </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Chattitle;
