import React, { useState } from 'react'
import './globalChatForm.scss'
import { context } from '../../context'
import { useContext } from 'react'

const GlobalChatForm = ({ setChats, chats }) => {
  const { state, dispatch } = useContext(context)
  const [text, setText] = useState('')

  const addMessage = () => {
    // setChats([...chats, {
    //   body: text,
    //   userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU'
    // }])
    dispatch({
      type: 'chatAdd', payload: {
        chat: {
          body: text,
          userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU'
        }
      }
    })
  }

  return (
    <div className='form'>
      <textarea placeholder='Xabar yozish' onChange={e => setText(e.target.value)}></textarea>
      <button onClick={addMessage}>Send</button>
    </div>
  )
}

export default GlobalChatForm