import React from 'react';

export default function Input() {
    
    return(
      <textarea
      rows={6}
      className="shadow-sm w-96 resize border block border-red-300 overflow-auto"
      placeholder="Names"
      defaultValue={''}
    />
    )
}