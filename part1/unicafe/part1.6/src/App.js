import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

//Contains the feedback results for "good" "neutral" and "bad" buttons
const Stats = (props) => {
  return (
    <div>
      <h1> statistics</h1>
      <p>good    {props.totalGood}</p>
      <p>neutral   {props.totalNeutral}</p>
      <p>bad    {props.totalBad}</p>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaceGood = () => setGood(good + 1)
  const increasetoZero = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)


  return (
    <div>
      <Display />
      <Button
        onClick={increaceGood}
        text='Good'
      />
      <Button
        onClick={increasetoZero}
        text='Neutral'
      />
      <Button
        onClick={increaseBad}
        text='Bad'
      />

      <Stats
        totalGood={good}
        totalNeutral={neutral}
        totalBad={bad}
      />

    </div>
  )

}


export default App