import {
  BellIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'

import React from 'react'

const NavBar = ({ handleAddTask }) => {
  return (
    <nav className="grid grid-cols-5 justify-items-center fixed bottom-0 w-full bg-secondary py-4">
      <a href="#">
        <HomeIcon className="size-8 text-primary" />
      </a>
      <a href="#">
        <ChatBubbleLeftRightIcon className="size-8 text-primary" />
      </a>
      <a href="#" onClick={handleAddTask}>
        <PlusCircleIcon className="size-8 text-primary" />
      </a>
      <a href="#">
        <CalendarDaysIcon className="size-8 text-primary" />
      </a>
      <a href="#">
        <BellIcon className="size-8 text-primary" />
      </a>
    </nav>
  )
}

export default NavBar
