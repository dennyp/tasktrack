import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from '@headlessui/react'
import React from 'react'
import CustomCombobox from './CustomCombobox'

const statuses = [
  { id: 1, name: 'To do' },
  { id: 2, name: 'In progress' },
  { id: 3, name: 'Done' },
]
const AddTask = () => {
  return (
    <>
      <Fieldset>
        <Legend className="text-xl font-bold text-center">Add Task</Legend>
        <Field className="mb-4">
          <Label className="block text-md">Task title</Label>
          <Input className="w-full mt-1 p-2" name="title" />
        </Field>
        <Field className="mb-4">
          <Label className="block text-md">Description</Label>
          <Textarea className="w-full mt-1 p-2" name="description" />
        </Field>
        <Field>
          <Label className="block text-md">Status</Label>
          <CustomCombobox itemChoices={statuses} />
        </Field>
      </Fieldset>
      <div className="self-end">
        <Button className="w-full mt-4 rounded-sm bg-secondary text-white py-2 px-4 data-[active]:bg-primary">
          Create
        </Button>
      </div>
    </>
  )
}

export default AddTask
