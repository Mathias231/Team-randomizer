import React from 'react';

export default function Input() {
    
    return(
      <textarea
      id="about"
      name="about"
      rows={5}
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
      placeholder="Team name"
      defaultValue={''}
    />
    )
}