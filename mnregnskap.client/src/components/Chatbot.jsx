import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

/* <i class="fa-solid fa-comment-lines"></i> denn kan vi ikke bruke, koster penger */

function Chatbot() {
    return (
        <div className="Chat">
            <button className="chatButton" onClick="chatButton">
                <div id="class-icon"></div>  
                <FontAwesomeIcon icon={faCommentDots} />
            </button>
        </div>
    );
};

export default Chatbot;