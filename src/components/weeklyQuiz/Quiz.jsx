import React, { useState, useEffect } from 'react';
import '../../styles/tailwind.css';
import './quiz.css';

const Quiz = ({ quizQuestions, getQuizAgain }) => {
    // State variables for managing quiz state
    const [questionIndex, setQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [showStartScreen, setShowStartScreen] = useState(true);
    const [showQuizScreen, setShowQuizScreen] = useState(false);
    const [showEndScreen, setShowEndScreen] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [incorrectQuestions, setIncorrectQuestions] = useState([]);

    // Function to start the quiz
    const startQuiz = () => {
        // Show start screen
        setShowStartScreen(false);
        setShowQuizScreen(true);
    };


    // Function to restart the quiz
    const reloadQuiz = () => {
        // Reset quiz state and fetch new quiz questions
        setQuestionIndex(0);
        setFeedback('');
        setSelectedAnswer(null);
        setFinalScore(0);
        setIncorrectQuestions([]);
        setShowQuizScreen(false);
        setShowEndScreen(false);
        setShowStartScreen(true);
        // Call the callback function to get quiz questions again
        getQuizAgain();
    }

    // Function to get the next question
    const getQuestion = (index) => {
        if (index < quizQuestions.length) {
            setQuestionIndex(index);
            setFeedback('');
            setSelectedAnswer(null);
        } else {
            // End the quiz if all questions have been answered
            endQuiz();
        }
    };

    // Function to end the quiz
    const endQuiz = () => {
        setShowQuizScreen(false);
        setShowEndScreen(true);
    };

    // Function to handle a user's answer click
    const handleAnswerClick = (index) => {
        const currentQuestion = quizQuestions[questionIndex];

        if (selectedAnswer === null) {
            if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
                setFeedback('Correct!');
                setFinalScore((prevScore) => prevScore + 1);
            } else {
                setFeedback('Wrong!');
                setIncorrectQuestions((prevIncorrect) => [...prevIncorrect, currentQuestion]);
            }
        }

        setSelectedAnswer(index);

        // Move to the next question after a delay for feedback
        setTimeout(() => {
            setQuestionIndex((prevIndex) => prevIndex + 1);
            getQuestion(questionIndex + 1);
        }, 1000);
    };

    useEffect(() => {
        // Get the first question when the component mounts
        getQuestion(questionIndex);
    }, [questionIndex]);

    return (
        <div>
            {/* Start screen content */}
            {!showEndScreen && showStartScreen && (
                <div className="start-screen bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white p-8 mx-auto w-full">
                    <h2 className="mt-12 mb-7 text-3xl font-bold mb-4 text-center">Weekly Quiz</h2>
                    <p className="text-center mb-10 mt-8">
                        Test your knowledge by trying to answer the following questions. You'll be able to see your score at the end!
                    </p>
                    <button

                        className="bg-yellow-400 mb-20 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mx-auto block"
                        onClick={startQuiz}
                    >
                        Start Quiz
                    </button>
                </div>
            )}

            {/* Render the quiz screen */}
            {!showStartScreen && showQuizScreen && (
                <>
                    {/* Quiz screen header */}
                    <div className="heroSection bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-white p-8 pb-10 mb-8 flex flex-col md:flex-row items-center">
                        <h2 className="text-3xl font-bold mx-auto">Weekly Quiz</h2>
                        <button
                            className="restart-quiz-btn bg-yellow-400 mb-20 md:mb-0 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                            onClick={reloadQuiz}
                        >
                            Restart Quiz
                        </button>
                    </div>
                    {/* Quiz questions and answers */}
                    <div className="mb-4 mx-auto max-w-lg">
                        {quizQuestions[questionIndex] && (
                            <>
                                <h3 className="text-2xl font-bold mb-7">{quizQuestions[questionIndex].question}</h3>
                                <form>
                                    {quizQuestions[questionIndex].answers.map((answer, index) => (
                                        <div key={index} className="mb-5">
                                            <input
                                                className="radioCustomButton"
                                                type="radio"
                                                id={`answer-${index}`}
                                                name="answer"
                                                onChange={() => handleAnswerClick(index)}
                                                checked={selectedAnswer === index}
                                                disabled={selectedAnswer !== null}
                                            />
                                            <label className="radioCustomLabel" htmlFor={`answer-${index}`}>{answer}</label>
                                        </div>
                                    ))}
                                </form>
                            </>
                        )}
                    </div>
                    {/* Display feedback */}
                    <p className="mx-auto max-w-md mt-8">Feedback:</p>
                    <p className="mb-10 mx-auto max-w-md">{feedback}</p>
                </>
            )}
            {/* Render the end screen */}
            {!showQuizScreen && showEndScreen && (
                <div className="end-screen bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white p-8 mx-auto w-full">
                    <h2 className="mt-5 mb-7 text-3xl font-bold mb-4 text-center">Quiz Completed</h2>
                    <p className="text-center mb-7 mt-8 text-xl">
                        Congratulations on completing the quiz!</p>
                    <p className="text-center mb-10 mt-2">Your final score is <span className="font-bold text-2xl">{finalScore}</span> out of <span className="font-bold text-2xl">{quizQuestions.length}</span>.</p>


                    <div className="max-w-4xl mx-auto my-auto px-6 py-5 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                        <p className="font-semibold text-gray-200">
                            {incorrectQuestions.length > 0 && (
                                <div className="text-center mb-10 mt-8">
                                    <h3 className="mt-7 mb-7 text-2xl font-bold mb-2 text-center">The questions you got wrong:</h3>
                                    {incorrectQuestions.map((question, index) => (
                                        <div key={index} className="mb-2">
                                            <p className="mt-5 mb-1">
                                                <strong>{index + 1}:</strong> {question.question}
                                            </p>
                                            <p className="text-green-500 mb-7 font-light">
                                                Correct Answer: {question.correctAnswer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </p>
                    </div>


                    <p className="text-center mb-10 mt-10">You can restart the quiz or do something else.

                    </p>
                    <button
                        className="restartQuizBtn bg-yellow-400 hover:bg-green-400 text-white font-bold mb-8 py-2 px-4 rounded mx-auto block"
                        onClick={reloadQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;          