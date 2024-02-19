//import { useEffect, useState } from 'react';
import useState from 'react';
import './App.css';
import  NavBar from './components/NavBar';

function App() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    //AI-generert kode, må endres/forstårs:
    const sendQuestionToAPI = () => {
        fetch('http://127.0.0.1:5000/api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: question }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setResponse(JSON.stringify(data, null, 2));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    //AI-generert kode, må endres/forstårs:
    return (
        <div className="App">
            <header className="App-header">
                <NavBar>Test</NavBar>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question"
                />
                <button onClick={sendQuestionToAPI}>Send Question</button>
                <button onClick={sendQuestionToAPI}>Send The Same Question Again</button>
                {response && <pre>{response}</pre>}
            </header>
        </div>
    );
}

export default App;