import React from 'react'
import TaskList from './components/TaskList'

const Home = () => {
  return (
    <>
      <div className="flex justify-between mb-1">
        <div>
          <h3>Active Tasks</h3>
        </div>
        <div>
          <a href="#" className="text-secondary">
            List all
          </a>
        </div>
      </div>
      <div>
        <TaskList />
      </div>
    </>
  )
}

export default Home
