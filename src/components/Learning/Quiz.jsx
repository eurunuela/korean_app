import { useState } from 'react'
import './Quiz.css'

function Quiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleSelectAnswer = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    if (selectedAnswer === currentQuestion.correct) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
      if (onComplete) {
        onComplete(score + (selectedAnswer === currentQuestion.correct ? 1 : 0), questions.length)
      }
    }
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const finalScore = score
    const percentage = Math.round((finalScore / questions.length) * 100)

    return (
      <div className="quiz-complete">
        <div className="quiz-complete-icon">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
        </div>
        <h3>Quiz Complete!</h3>
        <div className="quiz-score">
          <span className="quiz-score-value">{finalScore}</span>
          <span className="quiz-score-total">/ {questions.length}</span>
        </div>
        <p className="quiz-score-percent">{percentage}% correct</p>
        <p className="quiz-feedback">
          {percentage >= 80
            ? 'Excellent! You\'ve mastered this material.'
            : percentage >= 60
            ? 'Good job! Review the items you missed.'
            : 'Keep practicing! Review the study guide again.'}
        </p>
        <button className="quiz-retry" onClick={handleRetry}>
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <div className="quiz-progress-text">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-question">
        <h3>{currentQuestion.question}</h3>
      </div>

      <div className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`quiz-option ${
              selectedAnswer === index ? 'quiz-option--selected' : ''
            } ${
              showResult
                ? index === currentQuestion.correct
                  ? 'quiz-option--correct'
                  : selectedAnswer === index
                  ? 'quiz-option--incorrect'
                  : ''
                : ''
            }`}
            onClick={() => handleSelectAnswer(index)}
            disabled={showResult}
          >
            <span className="quiz-option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="quiz-option-text">{option}</span>
          </button>
        ))}
      </div>

      {showResult && currentQuestion.explanation && (
        <div className={`quiz-explanation ${
          selectedAnswer === currentQuestion.correct
            ? 'quiz-explanation--correct'
            : 'quiz-explanation--incorrect'
        }`}>
          <strong>
            {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect'}
          </strong>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="quiz-actions">
        {!showResult ? (
          <button
            className="quiz-submit"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            Check Answer
          </button>
        ) : (
          <button className="quiz-next" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz
