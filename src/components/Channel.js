import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";

function Channel() {
  
  const [messages, setMessages] = useState([]);
  const { logOut } = UserAuth();
  const scroll = useRef();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section
      className="container-fluid"
      style={{ backgroundColor: "#eee", height: "100%" }}
    >
      <div className="d-flex justify-content-end">
        <button onClick={handleSignOut} className="btn btn-primary mt-3">
          Logout
        </button>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 col-lg-8 col-xl-7">
          <div
            className="card"
            id="chat1"
            style={{ borderRadius: "15px", marginTop: "5rem"}}
          >
            <div
              className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <p className="mb-0 fw-bold mx-auto">Awesome Chatter</p>
            </div>
            <main>
              {messages &&
                messages.map((message) => (
                  <Message key={message.id} message={message} />
                ))}
            </main>
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Channel;
