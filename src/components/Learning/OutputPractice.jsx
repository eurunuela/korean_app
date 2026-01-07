import { useState, useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './OutputPractice.css'

function OutputPractice({ exercises }) {
  const { currentLanguage } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState(null)
  const [completed, setCompleted] = useState([])

  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])

  const currentExercise = exercises[currentIndex]

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      chunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        setAudioURL(url)
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (err) {
      console.error('Error accessing microphone:', err)
      alert('Could not access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleComplete = () => {
    setCompleted([...completed, currentIndex])
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setUserInput('')
      setShowHint(false)
      setAudioURL(null)
    }
  }

  const handleSkip = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setUserInput('')
      setShowHint(false)
      setAudioURL(null)
    }
  }

  if (!exercises || exercises.length === 0) {
    return null
  }

  const progress = ((completed.length) / exercises.length) * 100

  return (
    <div className="output-practice">
      <div className="output-header">
        <h3>Your Turn</h3>
        <div className="output-progress">
          <span>{completed.length} / {exercises.length}</span>
          <div className="output-progress-bar">
            <div className="output-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="output-exercise">
        <div className="output-type">
          {currentExercise.type === 'speaking' && '🎤 Speaking'}
          {currentExercise.type === 'writing' && '✏️ Writing'}
          {currentExercise.type === 'recording' && '🎙️ Record'}
          {currentExercise.type === 'activity' && '📝 Activity'}
        </div>

        <p className="output-prompt">{currentExercise.prompt}</p>

        {currentExercise.hint && (
          <div className="output-hint-container">
            <button
              className="output-hint-toggle"
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {showHint && (
              <p className="output-hint">{currentExercise.hint}</p>
            )}
          </div>
        )}

        {currentExercise.answer && showHint && (
          <div className="output-answer">
            <strong>Answer:</strong>
            <p className="output-answer-text">{currentExercise.answer}</p>
          </div>
        )}

        {(currentExercise.type === 'writing') && (
          <textarea
            className="output-textarea"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={`Write your answer in ${currentLanguage?.name || 'the target language'}...`}
            rows={4}
          />
        )}

        {(currentExercise.type === 'recording' || currentExercise.type === 'speaking') && (
          <div className="output-recording">
            {!isRecording ? (
              <button className="output-record-btn" onClick={startRecording}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                Start Recording
              </button>
            ) : (
              <button className="output-record-btn output-record-btn--recording" onClick={stopRecording}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="6" width="12" height="12" />
                </svg>
                Stop Recording
              </button>
            )}

            {audioURL && (
              <div className="output-playback">
                <audio controls src={audioURL} />
                <button className="output-rerecord" onClick={() => setAudioURL(null)}>
                  Re-record
                </button>
              </div>
            )}
          </div>
        )}

        <div className="output-checklist">
          <label className="output-check">
            <input type="checkbox" />
            <span>I completed this exercise</span>
          </label>
        </div>
      </div>

      <div className="output-actions">
        <button className="output-skip" onClick={handleSkip}>
          Skip
        </button>
        <button className="output-complete" onClick={handleComplete}>
          Mark Complete
        </button>
      </div>

      {completed.length === exercises.length && (
        <div className="output-done">
          <span>🎉</span> Great job! You've completed all exercises.
        </div>
      )}
    </div>
  )
}

export default OutputPractice
