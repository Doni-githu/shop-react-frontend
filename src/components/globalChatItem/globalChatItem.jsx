import React from 'react'
import './globalChatItem.scss'

const GlobalChatItem = ({chats, i}) => {

  return (
    <div className={i%2 === 0 ? 'itemLeft':'itemRight'}>
      <div className="userImg">
        <img src={chats.userImage} alt="" />
      </div>
      <div className="card1">
        <p>
          {chats.body}
        </p>
      </div>
    </div>
  )
}

export default GlobalChatItem