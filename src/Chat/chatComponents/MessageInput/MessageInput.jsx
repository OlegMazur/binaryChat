import "./messageInput.css"
const MessageInput=(props)=>{

    return( 
        <div className="message-input">
           <div >
               <input type="text"
               className="messages-input-text"
               placeholder="message"
               value={props.newMessageText}
               onChange={event=>props.setNewMessageText(event.target.value)}
              onKeyPress={props.addMessage}
               />
               

           </div> 
           <div>
            
                <button className="message-input-button" onClick={props.addMessage} >  Send </button>
            </div> 
        </div>

    )
}
export default MessageInput