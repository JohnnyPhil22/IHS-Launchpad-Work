import React from 'react'
import './GoalList.css'

const GoalList = (props) => {
    return (
    <ul className='goal-list'>
      {props.goals.map(goal => {
          return <ul><li key={goal.id}>{goal.text}</li></ul>
      })}
    </ul>
    )
}

export default GoalList;