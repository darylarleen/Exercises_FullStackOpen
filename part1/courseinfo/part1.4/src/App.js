//Exercise part 1.4
import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partx={props.parts} />
    </div >
  )
}

//Part  extracts name and exercises number then
//it displays them within a <div tag 
const Part = (props) => {
  return (
    <div>

      <p> {props.partx[0].name}  {props.partx[0].exercises} </p>
      <p> {props.partx[1].name}  {props.partx[1].exercises}</p>
      <p> {props.partx[2].name}  {props.partx[2].exercises}</p>

    </div>
  )
}

// Total calculates the total number of exercises
//Then it displays as HTML it within  <p> tag 
const Total = (props) => {

  return (
    <div>
      <p>  Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  //array definition with object literals
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  )
}

export default App