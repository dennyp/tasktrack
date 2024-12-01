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
      <div className="grid grid-cols-12  focus:outline-none">
        <ComboboxInput
          aria-label="Status"
          displayValue={(item) => item?.name}
          onChange={(event) => setQuery(event.target.value)}
          className="col-span-11 p-2 z-10"
        />
        <ComboboxButton className="group col-span-1">
          <ChevronDownIcon className="w-full h-full size-5 bg-white   group-data-[hover]:fill-black/60" />
        </ComboboxButton>
      </div>
      <ComboboxOptions anchor="bottom start">
        {filtered.map((item) => (
          <ComboboxOption
            key={item.id}
            value={item}
            className="grid grid-cols-12 group items-center bg-white gap-3"
          >
            <CheckIcon className="invisible size-4 col-span-1 group-data-[selected]:visible" />
            <div className="col-span-11 ml-1">{item.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}

export default CustomCombobox
