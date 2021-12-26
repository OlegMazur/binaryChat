import "./Message.css"
const Message=({id, userId, avatar, user, text, createdAt,editedAt})=>{
    let date=new Date( Date.parse(createdAt));
    let formdate=date.getHours()+":"+date.getMinutes();
    
    return( 
        <div className="message">
            <div class="message-time">{ formdate}</div>
                
                
            
            <div> 
                    <span className="message-text">{text}</span> 
                    <img src={avatar} alt="Avatar" className="message-user-avatar"/>  
                    <div className="message-user-name">{user}</div>
            </div>
            <button className="message-like">like</button>
                
        </div>

    )
}
export default Message