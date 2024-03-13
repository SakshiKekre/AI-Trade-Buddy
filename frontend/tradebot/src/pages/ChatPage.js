import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender}`}>
            {chat.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatPage;
