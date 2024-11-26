import React, { useEffect, useState } from 'react'
// import { fetchTasks } from '../utils/api'
import TaskListItem from './TaskListItem'

const tasksDummy = [
  {
    task_id: 1,
    title: 'Task 1',
    description: 'Description 1',
    status: 'Status 1',
    due_date: '2023-01-01',
  },
  {
    task_id: 2,
    title: 'Task 2',
    description: 'Description 2',
    status: 'Status 2',
    due_date: '2023-01-02',
  },
  {
    task_id: 3,
    title: 'Task 3',
    description: 'Description 3',
    status: 'Status 3',
    due_date: '2023-01-03',
  },
  {
    task_id: 4,
    title: 'Task 4',
    description: 'Description 4',
    status: 'Status 4',
    due_date: '2023-01-04',
  },
  {
    task_id: 5,
    title: 'Task 5',
    description: 'Description 5',
    status: 'Status 5',
    due_date: '2023-01-05',
  },
]

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = tasksDummy
        setTasks(data)
      } catch (error) {
        console.error('error fetching tasks', error)
      }
    }

    getTasks()
  }, [])

  return (
    <>
      <ul className="divide-y-1">
        {tasks.map((task, index) => (
          <TaskListItem task={task} key={task.task_id} />
        ))}
      </ul>
    </>
  )
}

export default TaskList
