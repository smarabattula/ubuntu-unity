import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Quiz from './Quiz';

function GetQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch quiz questions from the API
  const getQuiz = async () => {
    try {
      setLoading(true);
      // Fetch quiz questions from API
      const data = await API.getQuizQuestions();
      // Format the data to match the expected structure
      const formattedData = data.map((item) => ({
        questionId: item.QuestionID,
        question: item.Question,
        answers: [item.OptionA, item.OptionB, item.OptionC],
        correctAnswer: item.Correct,
      }));

      // Shuffle the questions and answers
      const shuffledData = formattedData.sort(() => Math.random() - 0.5);
      setQuizQuestions(shuffledData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch quiz questions when the component mounts
    getQuiz();
  }, []);

  return (
    <div>
      {/* Display loading message while quiz questions are being fetched */}
      {loading ? (
        <p className="mx-auto max-w-md mt-4">Loading quiz...</p>
      ) : (
        // Render the Quiz component with the fetched questions
        <Quiz quizQuestions={quizQuestions} getQuizAgain={getQuiz} />
      )}
    </div>
  );
}

export default GetQuiz;