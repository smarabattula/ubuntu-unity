// Recomm.js

import React, { useState } from 'react'; // Import useState from React
import axios from 'axios';

const BookRecomm = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('@5');
            const response = await axios.post('http://localhost:7005/api/question', { question });
            setResponse(response.data.message);
        } catch (error) {
            console.log('@6');
            console.error('Error fetching data:', error);
            setError(error);
        }
    };

    return (
        <div>
            <h1> Book Recommender</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your question"
                    value={question}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {error && (
                <div className="error">
                    <p>Error fetching data: {error.message}</p>
                </div>
            )}
            {response && (
                <div className="response">
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default BookRecomm; // Ensure to export the component with an uppercase name
