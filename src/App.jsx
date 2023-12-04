import { useEffect, useState } from 'react'
import './App.css'
import Die from './components/Die'
import Timer from './components/Timer.jsx'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [totalRolls, setTotalRolls] = useState(0)

  const [time, setTime] = useState({minutes: 0, seconds: 0})
  const [bestTime, setBestTime] = useState({minutes: Number.MAX_SAFE_INTEGER, seconds: Number.MAX_SAFE_INTEGER})

  // Keeps track of time every second
  useEffect(() => {
    if (!tenzies) {
      const intervalId = setInterval(() => {
        const newSeconds = (time.seconds + 1) % 60
        const newMinutes = Math.floor((time.seconds + 1) / 60)

        setTime({minutes: newMinutes, seconds: newSeconds})
      }, 1000)

      return () => clearInterval(intervalId)
    }
    
}, [time])

// Checks if the user has won the game
  useEffect(() => {
    const winningValue = dice[0].value
    for (let die of dice) {
      if (!die.isHeld || die.value != winningValue) {
        return 
      }
    }
    setTenzies(true)
    if ((time.minutes * 60) + time.seconds < (bestTime.minutes * 60) + bestTime.seconds) {
      setBestTime({minutes: time.minutes, seconds: time.seconds})
    }

  }, [dice])

  // Random die created
  function generateNewDie() {
    return {
        value: Math.floor((Math.random() * 6) + 1),
        isHeld: false,
        id: nanoid()
    }
  }

  // Creates 10 die objects (used at the start and end of the game)
  function allNewDice() {
    const nums = []
    for (let i = 0; i < 10; i++) {
      nums.push(generateNewDie())
    }
    return nums
  }

  // Generates random die if they are not held by the user
  function rollDice() {
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      setTotalRolls(0)
      setTime({minutes: 0, seconds: 0})
    }
    else {
      setTotalRolls(prevRolls => prevRolls+1)
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die :
          generateNewDie()
      }))
    } 
  }

  // Holds the die 
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const dieElements = dice.map((die) => {
    return <Die key={die.id} 
                value={die.value} 
                isHeld={die.isHeld}
                holdDice={() => holdDice(die.id)}/>
  })

  return (
    <div>
      
      {tenzies 
        ? 
        <div className="time-container">
          <h3 className="timer">Game Time: {time.minutes}:{(time.seconds - 1) < 10 ? `0${time.seconds - 1}` : time.seconds - 1}</h3>
          <h3 className="timer">Best Time: {bestTime.minutes}:{bestTime.seconds < 10 ? `0${bestTime.seconds}` : bestTime.seconds}</h3>
        </div>
        :
        <h3 className="timer">Timer: {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h3>
      }
      <main>
        {tenzies && <Confetti/>}
        <h1 className="game-title">Tenzies</h1>
        <p className="game-description">Roll until all dice are the same. 
          Click each die to freeze it at its current value 
          between rolls.</p>
        <div className="die-container">
          {dieElements}
        </div>
        <button onClick={rollDice} className="btn">{tenzies ? "New Game" : "Roll"}</button>
        <h2 className="total-rolls">Total Rolls: {totalRolls}</h2>
        
      </main>
    </div>
  )
}

export default App
