import "./OwnMessages.css"
const OwnMessage=({id, userId, avatar, user, text, createdAt,editedAt})=>{
    //let date=createdAt;
    //let formdate=date.getHours()+":"+date.getMinutes()
    
    return( 
        <div className="own-message">
            <div className="message-text">{text}</div>
            <div className="message-time"></div>
            <button className="message-edit">  edit</button>
            <button className="message-delete">  delete</button>
            
            
        </div>

    )
}
export default OwnMessage