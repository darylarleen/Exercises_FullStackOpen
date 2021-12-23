import React, { useState } from 'react'

//Button component
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
//It also contains the totals, average and positive percentage inside a table
const Statistics = (props) => {
  if (props.total > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td><StatisticLine value={props.totalGood} />
            </td>
          </tr>
          <tr>
            <td> neutral</td>
            <td><StatisticLine value={props.totalNeutral} />
            </td>
          </tr>
          <tr>
            <td>bad</td>
            <td><StatisticLine value={props.totalBad} /> </td>
          </tr>
          <tr>
            <td>all</td>
            <td><StatisticLine value={props.total} /></td>
          </tr>
          <tr>
            <td>average</td>
            <td><Avg tGood={props.totalGood} tBad={props.totalBad} tTotal={props.total} /></td>
          </tr>
          <tr>
            <td>positive</td>
            <td><Posper tGood={props.totalGood} tTotal={props.total} /></td>
          </tr>
        </tbody>
      </table>

    )
  }

  //This message will appear as long as no one has given a feedback
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

//Statisticline component
const StatisticLine = (props) => {
  return (
    <p> {props.value}</p>

  )
}
// This component displays statistics
const Statstitle = () => {
  return (
    <div>
      <h1> statistics</h1>
    </div>
  )
}

//Agv calculates and displaysAverage feedbak and positive feedback percentage
const Avg = (props) => {

  return (
    <p>{(props.tGood / props.tTotal) - (props.tBad / props.tTotal)} </p>
  )
}

//Element calculates positive percentage
const Posper = (props) => {

  return (
    <p>{(props.tGood / props.tTotal) * 100} % </p>

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
      <Button onClick={increaceGood} text='Good' />
      <Button onClick={increasetoZero} text='Neutral' />
      <Button onClick={increaseBad} text='Bad' />
      <Statstitle />
      <Statistics totalGood={good} totalNeutral={neutral} totalBad={bad} total={good + neutral + bad} />
    </div>
  )
}

export default App