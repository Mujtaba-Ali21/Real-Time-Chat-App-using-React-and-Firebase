import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

function SendMessage({ scroll }) {
  const [input, setInput] = useState("");
  console.log(auth.currentUser);

  const sendMessage = async (e) => {
  e.preventDefault();
  if (input === "") {
    alert("Please Type Something First");
    return;
  }
  const { uid, photoURL, displayName} = auth.currentUser;
  await addDoc(collection(db, "messages"), {
    text: input,
    name: displayName,
    uid,
    photo: photoURL,
    timestamp: serverTimestamp(),
  });
  setInput("");
  scroll.current?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <>
      <form onSubmit={sendMessage}>
        <div className="main container messageSentInputBg mt-5 mb-5 border rounded-4">
          <div className="form-group has-search d-flex justify-content-end">
            <input
              type="text"
              className="form-control"
              id="messageSendInput"
              placeholder="Type Something"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <span
              className="fa fa-paper-plane messageSendButton"
              onClick={sendMessage}
            ></span>
          </div>

          <label className="form-label ms-1" htmlFor="messageSendInput">
            Type your message
          </label>
        </div>
      </form>
    </>
  );
}

export default SendMessage;
