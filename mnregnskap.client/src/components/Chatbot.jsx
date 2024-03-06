import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

/* <i class="fa-solid fa-comment-lines"></i> denn kan vi ikke bruke, koster penger */

function Chatbot() {

    const chatBodyRef = React.useRef(null);
    const [isOpen, setIsOpen] = useState(false); //Konstant for å åpne/lukke chat
    const [message, setMessage] = useState(''); //Konstant som lagrer sendt melding
    const [combinedMessages, setCombinedMessages] = useState([]);


    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    //Logikk for å sende spørsmålet til botten v API
    const sendMessage = () => {
        if (message.trim() !== '') {
            const newUserMessage = { type: 'user', content: message };
            setCombinedMessages(prev => [...prev, newUserMessage]);

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
                    const newBotResponse = { type: 'bot', content: data };
                    setCombinedMessages(prev => [...prev, newBotResponse]);
                })
                .catch((error) => {
                    console.error('Feil med returnering av melding fra robot:', error);
                    setCombinedMessages(prev => [...prev, { type: 'bot', content: "Det skjedde en feil, kjører serveren?" }]);
                });
        }
    };

    //Kvar gong combinedMessages er oppdatert scrollar me til botn av sida. 
    useEffect(() => {
        if (chatBodyRef.current) { //Hvis me finn elementet i chatten....
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight; //Scroller til botn av chatten.
        }
    }, [combinedMessages]);

    //For å kunne bruke enter for å sende meldingar til robotten.
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); //Passer på at enter ikkje gjer noko anne enn å sende melding
            sendMessage();
        }
    };

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
                        <h2>Chat med oss!</h2>
                        <button className="closeChat" onClick={toggleChat}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="chatBody" ref={chatBodyRef}>
                        {combinedMessages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? "chatMessage" : "botMessage"}>
                                {msg.content}
                            </div>
                        ))}
                    </div>
                    <div className="chatFooter">
                        <input type="text"
                            className="messageInput"
                            placeholder="Skriv inn meldingen din ..."
                            value={message}
                            onChange={handleInputChange} //Oppdaterer message kvar gong det er gjort ein input.
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