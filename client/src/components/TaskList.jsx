import React, { useEffect, useState } from 'react'
import { fetchTasks } from '../utils/api'
import TaskListItem from './TaskListItem'

const TaskList = () => {
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

  const extractDate = (datetime) => {
    return datetime.split('T')[0]
  }

  return (
    <>
      <ul className="divide-y-2">
        {tasks.map((task, index) => (
          <li
            key={task.task_id}
            className="bg-primary text-white rounded-lg h-24"
          >
            <div className="mx-2 pb-2 h-full">
              <p className="text-lg font-semibold leading-6">{task.title}</p>
              <p className="text-sm">{task.description}</p>
              <p className="text-sm">Due on: {extractDate(task.due_date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
