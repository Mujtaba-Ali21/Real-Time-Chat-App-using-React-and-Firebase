import React from "react";
import { auth } from "../firebase";

function Message({ message }) {

  const style = {
    sent: "card-body d-flex flex-row-reverse justify-content-end mt-5",
    received: "card-body d-flex flex-row justify-content-end mt-5",
  };

  const nameStyle = {
    sentName: "small d-flex flex-row-reverse justify-content-end",
    receivedName: "small d-flex flex-row-reverse justify-content-start",
  };

  const textStyle = {
    sentText: "bg-white small ms-3 shadow p-2 mb-2 rounded me-2",
    receivedText: "customBg small ms-3 shadow p-2 mb-2 rounded me-2 text-end",
  };

  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.received}`
      : `${style.sent}`;

  const messageText =
    message.uid === auth.currentUser.uid
      ? `${textStyle.receivedText}`
      : `${textStyle.sentText}`;

  const messageName =
    message.uid === auth.currentUser.uid
      ? `${nameStyle.receivedName}`
      : `${nameStyle.sentName}`;

  const timestamp = message.timestamp ? message.timestamp.toDate() : null;

  return (
    <div className={`${messageClass}`}>
      <p className={`${messageText}`} style={{ borderRadius: "15px" }}>
        {timestamp && (
          <span className={`${messageName}`} style={{ color: "gray" }}>
            {message.name} &#x2022;{" "}
            {timestamp.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        )}
        {message.text}
      </p>
      
  {/* <img
    src={""}
    alt="Profile Picture"
    style={{ width: "45px", height: "100%", borderRadius: '35px' }}
  /> */}
    </div>
  );
}

export default Message;