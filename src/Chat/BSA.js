
import React, { useEffect, useState } from "react";
import Header from "./chatComponents/Header/Header"
import Message from "./chatComponents/Message/Message"
import MessageInput from "./chatComponents/MessageInput/MessageInput"
import MessageList from "./chatComponents/MessageList/MessageList"
import OwnMessage from "./chatComponents/OwnMessage/OwnMessage"
import  "./bsa.css"
const Chat=()=>{
     const[messages, setMessages]=useState([])

useEffect (() => {
    
    fetch("https://edikdolynskyi.github.io/react_sources/messages.json")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          //setIsLoaded(true);
          setMessages(result);
        })
  }, [])
const [newMessageText,setNewMessageText]=useState("")

const addMessage=(event)=>{
    
    if(event.key==="Enter"||event.type==="click"){
        setMessages([
            ...messages,
            
            {
            createdAt: Date.now(),
            text:newMessageText,
            id:"myId",
            user:"Oleh"
            }
            
    
            ])
            setNewMessageText("")
        }
    }
    return( 
        <div className="chat">
            <div className="header">
                <Header messages={messages}/>
            </div>
            <div>
                
            </div>
            <div ><MessageList messages={messages}  />
                <div>
                    
                    <OwnMessage/>
                </div>
                <div >
                <MessageInput setNewMessageText={setNewMessageText} newMessageText={newMessageText} addMessage={addMessage}/>
                 </div>   
            </div>
           
            
             
     
        </div>

    )
}
export default Chat