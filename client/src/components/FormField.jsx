import React from 'react'

/* Defines a FormField to have a type, name, placeholder, and value
and to handle input with the onChange variable. Also adds the Suprise
me button functionality that can be turned on. */
const FormField = ({ LabelName, type, name, placeholder, value, 
  handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-[#e1d9d1]"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 
            px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="bg-zinc-700 text-[#e1d9d1] text-sm rounded-lg focus:ring-[#4649ff] 
      focus:border-[#4649ff] outline-none block w-full p-3 placeholder-zinc-300"
      />
    </div>
  )
}

export default FormField;