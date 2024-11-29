import { useState } from 'react'
import Home from './Home'
import AddTask from './components/AddTask'
import Modal from './components/Modal'
import NavBar from './components/NavBar'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleAddTask = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="bg-background h-screen">
      <header className="mx-5">
        <Home></Home>
      </header>
      <NavBar handleAddTask={handleAddTask} />
      {isOpen && (
        <Modal open={isOpen} onClose={handleCloseModal}>
          <AddTask />
        </Modal>
      )}
    </div>
  )
}

export default App
