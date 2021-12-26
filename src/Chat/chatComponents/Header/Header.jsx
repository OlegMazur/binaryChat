import "./Header.css"
const Header=(props)=>{
    
    let messageCount=props.messages.length+1;
    let set=new Set(props.messages)
    let userCount=set.size
     //let date= new Date (Date.parse(props.messages[props.messages.length].createdAt));

    return( 
        <div >
            <span className="header-title"> Oleg Chat </span> 
            <span className="header-users-count"> {userCount}users </span>
            <span className="header-messages-count"> {messageCount}messages</span>
            <span className="header-last-message-date"> дату останнього повідомлення </span>
            
            
        </div>

    )
}
export default Header