import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

/**
 * A custom combobox component which takes an array of objects with an id and a name.
 * It will filter the options based on the user's input and display the filtered options.
 * When an option is selected, it will call the onChange method with the selected item.
 * When the user closes the combobox, it will call the onClose method with no arguments.
 *
 * @param {{ id: number, name: string }[]} itemChoices
 * @returns {JSX.Element}
 */
const CustomCombobox = ({ itemChoices }) => {
  const [selectedItem, setSelectedItem] = useState(itemChoices[0])
  const [query, setQuery] = useState('')

  const filtered =
    query === ''
      ? itemChoices
      : itemChoices.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      value={selectedItem}
      onChange={(value) => setSelectedItem(value)}
      onClose={() => {
        setQuery('')
      }}
    >
      <div className="grid grid-cols-12 focus:outline-none bg-white">
        <ComboboxInput
          aria-label="Status"
          displayValue={(item) => item?.name}
          onChange={(event) => setQuery(event.target.value)}
          className="col-span-11 p-2 rounded-l-md"
        />
        <ComboboxButton className="group col-span-1">
          <ChevronDownIcon className="w-full h-full size-5 bg-white group-data-[hover]:fill-black/60 rounded-r-md" />
        </ComboboxButton>
        <ComboboxOptions
          anchor="bottom start"
          className="col-span-11 w-combobox-input mt-1.5 rounded-md"
        >
          {filtered.map((item) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="flex group items-center bg-white py-1 hover:bg-primary"
            >
              <CheckIcon className="invisible size-4 group-data-[selected]:visible ml-1" />
              <div className="ml-1">{item.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  )
}

export default CustomCombobox
