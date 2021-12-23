//Exercise part 1.5
import React from 'react'

//Header displays the course title
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.courseTitle.name}
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

//Part  gets  name and exercises  number via props then
//it displays them on html page
const Part = (props) => {
  return (
    <div>

      <p> {props.partx.parts[0].name}  {props.partx.parts[0].exercises} </p>
      <p> {props.partx.parts[1].name}  {props.partx.parts[1].exercises}</p>
      <p> {props.partx.parts[2].name}  {props.partx.parts[2].exercises}</p>

    </div>

  )
}

// Total calculates the total number of exercises
//Then it displays as HTML it within  <p> tag 
const Total = (props) => {

  return (
    <div>
      <p>  Number of exercises: {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}
      </p>
    </div>
  )
}
//Modified object to have only two elements name and parts. parts has two elements
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseTitle={course} />
      <Content parts={course} />
      <Total total={course} />
    </div>
  )
}

export default App