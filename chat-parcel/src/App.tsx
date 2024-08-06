import React, { useState } from 'react';
import './App.css';
import chatIcon  from './assets/chat.png'; 

interface AppProps {
  initiator?: string;
}

const App: React.FC<AppProps> = ({ initiator }) => {

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submitted');
    toggleModal();
  };

  return (
    <div className="chat-with-us">
      <button className="chat-icon" onClick={toggleModal}>
        <h5>Need Help?</h5>
        <img src={chatIcon} alt="Chat with Us" />
      </button>

      {isModalOpen && (
        <div className="chat-modal">
          <div className="chat-modal-content">
            <button className="close-modal" onClick={toggleModal}>×</button>
            <h2>Chat with Us</h2>
            {initiator ? <p>Chat initiated from {initiator}</p> : <></>}
            <form className="chat-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={4} required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;