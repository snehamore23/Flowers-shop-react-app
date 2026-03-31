import { useState } from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

const FLOWERS = [
  { id: "rose", label: "Rose", emoji: "🌹" },
  { id: "tulip", label: "Tulip", emoji: "🌷" },
  { id: "sunflower", label: "Sunflower", emoji: "🌻" },
  { id: "lily", label: "Lily", emoji: "🌸" },
]

const getRandomFlower = () => FLOWERS[Math.floor(Math.random() * FLOWERS.length)]

function NotFound() {
  const [targetFlower, setTargetFlower] = useState(getRandomFlower())
  const [selected, setSelected] = useState(null)
  const [message, setMessage] = useState("Can you find the correct flower?")

  const handleChoice = (flower) => {
    setSelected(flower.id)
    if (flower.id === targetFlower.id) {
      setMessage("Great! You found the right flower. Want to try again?")
    } else {
      setMessage("Oops! That’s not the right flower. Try again.")
    }
  }

  const restartGame = () => {
    const nextFlower = getRandomFlower()
    setTargetFlower(nextFlower)
    setSelected(null)
    setMessage("Can you find the correct flower?")
  }

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <span className="badge">404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist. While you are here, play a quick flower game!
        </p>

        <div className="game-header">
          <strong>Find this flower:</strong>
          <span className="target-flower">{targetFlower.emoji} {targetFlower.label}</span>
        </div>

        <div className="flower-grid">
          {FLOWERS.map((flower) => (
            <button
              key={flower.id}
              type="button"
              className={`flower-button ${selected === flower.id ? "selected" : ""} ${flower.id === targetFlower.id && selected === flower.id ? "correct" : ""}`}
              onClick={() => handleChoice(flower)}
            >
              <span className="flower-emoji">{flower.emoji}</span>
              <span>{flower.label}</span>
            </button>
          ))}
        </div>

        <p className="game-message">{message}</p>

        <div className="notfound-actions">
          <button type="button" className="retry-button" onClick={restartGame}>
            Try another flower
          </button>
          <Link to="/" className="home-link">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound