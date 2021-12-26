import Message from "../Message/Message"
import OwnMessage from "../OwnMessage/OwnMessage"
import "./messageList.css"

const MessageList=({messages})=>{
    
    return( 
         <div className="message-list">
             <div className="messages-divider">Today</div>
             
            <ul>
                 { messages.map(item=> < Message {...item}/>)}
                 
                 
               
                
            </ul>
            <div className="messages-divider">"Yesterday"</div>
            <div className="messages-divider">date message</div>
         </div>

    )
}
export default MessageList