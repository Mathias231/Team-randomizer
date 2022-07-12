import React, { useState } from 'react';

export default function Form() {
    // Variable for selected teams
    const [select, setSelect] = useState("1");

    // Variable for text field
    const [names, setNames] =  useState("");
    
    
    const handleTextField = (e) => {
        const value = e.target.value
        setNames(value)
    }

    const handleSelect = (e) => {
        const value = e.target.value
        setSelect(value)
    }

    const handleButton = (e) => {
        // Hent value fra Select og innhold i text field
        console.log("her er select " + select)
        console.log("Her er text " + names)
    }

    return(
        // Textarea
        <div className="grid grid-cols-3 mt-5 gap-3">
            <div className="col-span-2 w-full flex">
                <textarea className="m-5 w-full h-36 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Names"
                onChange={handleTextField}>
                </textarea>
            </div>

        {/* Select Options */}
            <div className="col-span-1 mr-5">
                <select className="w-full px-3 py-5 my-8 rounded-lg border border-gray-300 bg-gray-50" 
                onChange={handleSelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

        {/* Button */}
            <div className="ml-5">
                <button className="border-4 border-gray-600" 
                onClick={handleButton}>Trykk her</button>
            </div>
        </div>
    )
}
