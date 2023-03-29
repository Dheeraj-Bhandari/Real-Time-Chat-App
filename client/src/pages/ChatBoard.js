import React from 'react'
import "./ChatBoard.css"
const ChatBoard = () => {
  return (
    <>
    <div className="parent">
    <div className='about_and_setting'>About You and Setting
    <div className="user_profile">
        This is User profile
    </div>

    <div className="message_icon">
        <p>Messages</p>
    </div>

    <div className="groups">
        <p>Groups</p>
    </div>
    <div className="contacts">
        <p>Contacts</p>
    </div>

    <div className="profile"></div>
    </div>
    <div className='coversation'>Conversation</div>
    <div className='chat_dashboard'>chat dashboard</div>
    <div className='chat_info'>chat info</div>

    </div>

    </>
  )
}

export default ChatBoard