import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const extractDate = (datetime) => {
  return datetime.split('T')[0]
}

const TaskListItem = ({ task, taskid }) => {
  return (
    <li
      key={taskid}
      className="my-2 bg-primary text-black rounded-sm grid grid-cols-12"
    >
      <div className="mx-2 h-full col-span-10 grid grid-rows-4">
        <h3 className="font-semibold leading-6 row-span-1 pt-1">
          {task.title}
        </h3>
        <p className="text-sm row-span-1">{task.description}</p>
        <p className="text-sm row-span-1">{task.status}</p>
        <p className="text-sm row-span-1 pb-1">
          Due on: {extractDate(task.due_date)}
        </p>
      </div>
      <div className="col-span-2 content-center justify-self-center">
        <a href="#">
          <ArrowRightCircleIcon className="text-secondary size-8" />
        </a>
      </div>
    </li>
  )
}

export default TaskListItem
