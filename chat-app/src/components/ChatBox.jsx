import React,{useState,useRef,useEffect} from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import {query,collection,orderBy,onSnapshot,limit, }from 'firebase/firestore';
import {db} from "../firebase";

const ChatBox = () => {
  const[messages,setMessages]=useState([]);
  const scroll = useRef();
  useEffect(()=>{
    const queryMessages = query(
      collection(db,"messages"),
      orderBy("createdAt","desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(queryMessages,(snapshot)=>{
      const fetchedMessages = [];
      snapshot.forEach((doc)=>{
        fetchedMessages.push({...doc.data(),id: doc.id});
        });
        const sortedMessages = fetchedMessages.sort((a,b) => a.createdAt - b.createdAt);
        setMessages(sortedMessages);
      });
      return ()=> unsubscribe; 
  },[])
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message)=>(
          <Message key={message.id} message= {message}/>
        ))}
       
      </div>
      <span ref={scroll}></span>
      <SendMessage scoll={scroll}/>
    </main>
  );
};

export default ChatBox;