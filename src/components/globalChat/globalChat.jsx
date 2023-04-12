import React, { useState } from 'react'
import GlobalChatItem from '../globalChatItem/globalChatItem'
import GlobalChatForm from '../globalChatForm/globalChatForm'
import './globalChat.scss'
import { useContext } from 'react'
import { context } from '../../context'

const GlobalChat = () => {
  const [chats, setChats] = useState([])
  const { state } = useContext(context)




  return (
    <div className='globalChat'>
      <div className="scrol">
        <div className="items">
          {state.chats ? state.chats.map((mal, i) => (
            <GlobalChatItem key={i++} i={i++} chats={mal} />
          )) : <p>Loading...</p>}
        </div>
      </div>
      <div className="forms">
        <GlobalChatForm chats={chats} setChats={setChats} />
      </div>
    </div>
  )
}

export default GlobalChat