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

const AddTask = () => {
  return (
    <>
      <Fieldset>
        <Legend className="text-xl font-bold text-center">Add Task</Legend>
        <Field className="mb-4">
          <Label className="block text-md">Title</Label>
          <Input className="w-full mt-1 py-2" name="title" />
        </Field>
        <Field>
          <Label className="block text-md">Description</Label>
          <Textarea className="w-full mt-1 py-2" name="description" />
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
