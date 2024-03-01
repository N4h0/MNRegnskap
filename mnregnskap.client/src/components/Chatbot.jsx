import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

/* <i class="fa-solid fa-comment-lines"></i> denn kan vi ikke bruke, koster penger */

function Chatbot() {

    const [isOpen, setIsOpen] = useState(false); //Konstant for å åpne/lukke chat
    const [message, setMessage] = useState(''); //Konstant som lagrer sendt melding
    const [messages, setMessages] = useState([]); //Konstant som brukes for å sende melding
    const [response, setResponse] = useState(''); //Return-respons fra botten
    const [responses, setResponses] = useState([]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    //Logikk for å sende spørsmålet til botten v API
    const sendMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');

            fetch('http://127.0.0.1:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: message }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setResponse(JSON.stringify(data, null, 2));
                    setResponses([...responses, JSON.stringify(data, null, 2)]);
                })
                .catch((error) => {
                    setResponse("Det er en feil")
                    console.error('Error:', error);
                });
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); //Passer på at enter ikkje gjer noko anne enn å sende melding
            sendMessage();
        }
    };

    const combinedMessages = [
        ...messages.map(msg => ({ content: msg, type: 'message' })),
        ...responses.map(res => ({ content: res, type: 'response' }))
    ];

    return (
        <div className="Chat">
            {!isOpen && (
                <button className="chatButton" onClick={toggleChat}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </button>
            )}
            {isOpen && (
                <div className="chatDialog">
                    <div className="chatHeader">
                        <button className="closeChat" onClick={toggleChat}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="chatBody">
                        {messages.map((msg, index) => (
                            <div key={index} className="chatMessage">
                                {msg}
                            </div>
                        ))}
                        {responses.map((msg, index) => (
                            <div key={index} className="botMessage">
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="chatFooter">
                        <input type="text"
                            className="messageInput"
                            placeholder="Send en melding..."
                            value={message}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress} />
                        <button className="SendMessage" onClick={sendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};



export default Chatbot;