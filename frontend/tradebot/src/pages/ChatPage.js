import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';


function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    if (message.trim() === '') return;

    try {
      // Send message to server via API
      const response = await axios.post('/api/chat', { message });
      const responseData = response.data;

      // Update chat history
      setChatHistory([...chatHistory, { sender: 'user', message }]);
      setChatHistory([...chatHistory, { sender: 'bot', message: responseData }]);
      
      // Clear input field
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  // const ChatPage = () => {
    return (
    <div className="background container">

      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className='main'>
        <div className="chat-container">
          {/* <h1>Embedded Chat Page</h1> */}
          <iframe
            title="Chat Page"
            src="https://94fc8864b2003a63b4.gradio.live/"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
    );
  // };

  // return (
  //   <div className="chat-container">
  //     <div className="chat-history">
  //       {chatHistory.map((chat, index) => (
  //         <div key={index} className={`chat-message ${chat.sender}`}>
  //           {chat.message}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="input-container">
  //       <input
  //         type="text"
  //         placeholder="Type your message..."
  //         value={message}
  //         onChange={handleMessageChange}
  //       />
  //       <button onClick={sendMessage}>Send</button>
  //     </div>
  //   </div>
  // );


}

export default ChatPage;

