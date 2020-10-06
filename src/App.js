import React, { useState } from 'react'
import { questions } from './questions'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='App'>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
      {showScore && (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  )
}

export default App
