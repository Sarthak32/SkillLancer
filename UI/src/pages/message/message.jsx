import React from 'react'
import { Link } from 'react-router-dom'
import "./message.css"

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className='breadscrum'>
          <Link to="/messages" className='link'>  Messages </Link>{'>'}Barton
        </span>
        <div className="messages">
          <div className="item">
            <img src=""/>
            <p>I wanted to inform you that I have completed the assigned task as a Front-End Web Developer for The Indigenous internship opportunity. The React web app, integrated with the provided API endpoint and featuring a Material UI interface, is now ready for review. I appreciate the chance to demonstrate my skills and dedication.</p>
          </div>
          <div className="item owner">
            <img src=""/>
            <p>I wanted to inform you that I have completed the assigned task as a Front-End Web Developer for The Indigenous internship opportunity. The React web app, integrated with the provided API endpoint and featuring a Material UI interface, is now ready for review. I appreciate the chance to demonstrate my skills and dedication.</p>
          </div>
        </div>
        <div className="write">
          <textarea name='' placeholder='Write your message here' cols="10" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message