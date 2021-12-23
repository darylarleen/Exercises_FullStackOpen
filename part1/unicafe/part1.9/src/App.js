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
//It also contains average and positive percentage
const Statistics = (props) => {

  if (props.total > 0) {
    return (
      <div>
        <Statdetails
          tGood={props.totalGood}
          tNeutral={props.totalNeutral}
          tBad={props.totalBad} t
          Total={props.total}
        />
        <Avg tGood={props.totalGood}
          tBad={props.totalBad}
          tTotal={props.total}
        />
      </div>
    )
  }
  //This message will appear as long as no one has given a feedback
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const Statstitle = () => {
  return (
    <div>
      <h1> statistics</h1>
    </div>
  )
}
//It shows the totals of good, neutral and bad feedback
const Statdetails = (props) => {
  return (
    <div>

      <p>good    {props.tGood} </p>
      <p>neutral   {props.tNeutral}</p>
      <p>bad    {props.tBad}</p>
      <p>all   {props.tTotal} </p>

    </div>
  )
}
//Agv calculates and displaysAverage feedbak and positive feedback percentage
const Avg = (props) => {
  if (props.tTotal === 0) {
    return (
      <div>
        <p>average</p>
        <p>positive %</p>
      </div>
    )
  }

  return (
    <div>
      <p>average {(props.tGood / props.tTotal) - (props.tBad / props.tTotal)} </p>
      <p>positive {(props.tGood / props.tTotal) * 100} % </p>
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
      <Statstitle />
      <Statistics
        totalGood={good}
        totalNeutral={neutral}
        totalBad={bad}
        total={good + neutral + bad}
      />
    </div>
  )
}


export default App