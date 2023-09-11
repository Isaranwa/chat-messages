import React,{useState} from "react";
import {auth,db} from "../firebase"
import {addDoc,collection,serverTimestamp} from "firebase/firestore";

const SendMessage = ({scroll}) => {
  const[message,setMessage] = useState('');
  

  const sendMessage = async (event)=>{
    event.preventDefault();
    if(message.trim() === ""){
      alert("Enter a valid Message");
      return;
    }
    
    await addDoc(collection(db,"messages"),{
      text:message,
      name:auth.currentUser.displayName,
      avatar:auth.currentUser.photoURL,
      createdAt : serverTimestamp(),
      uid:auth.currentUser.uid
    });
    setMessage('');
    scroll.current.scrollIntoView({behaviour:"smooth"})
  };
  return (
    <form onSubmit={sendMessage} className="send-message" >
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        value={message}
        className="form-input__input"
        placeholder="Type Something..."
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button type="submit"> Send it</button>
    </form>
  );
};

export default SendMessage;