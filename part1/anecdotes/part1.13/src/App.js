import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Showvotes = (props) => {
  return (
    <p> has {props.tvotes} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [myArray, setMyArray] = useState([0, 0, 0, 0, 0, 0, 0])

  //function calculates random number to get quote from anacdotes array
  const randomNumber = () => {
    setSelected((selected * 0) + Math.floor(Math.random() * (anecdotes.length - 0)))
  }

  //it adds a vote fo each click on the vote button
  const voteClick = () => {
    const copy_points = [...myArray]
    const thisArray = [...anecdotes]
    const inArray = [...anecdotes]
    const sele = selected
    const cindex = thisArray.indexOf(inArray[sele])
    copy_points[cindex] += 1
    setMyArray(copy_points)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Showvotes has tvotes={myArray[selected]} votes />
      <Button onClick={voteClick} text="vote" />
      <Button onClick={randomNumber} text="next anecdote" />

    </div>
  )
}

export default App

