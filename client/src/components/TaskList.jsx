import React, { useEffect, useState } from 'react'
import { fetchTasks } from '../utils/api'
import TaskListItem from './TaskListItem'

const TaskList = () => {
  const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks()
        console.log('🚀 ~ getTasks ~ data:', data)
        setTasks(data)
      } catch (error) {}
    }

    getTasks()
  }, [])

  return (
    <>
      <div>
        {items.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
      </div>
    </>
  )
}

export default TaskList
