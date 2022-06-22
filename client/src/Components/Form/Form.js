import React, { useState } from 'react';

export default function Form() {
    const [select, setSelect] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setSelect(value)
        console.log(value)
    }

    return(
        <div className="grid grid-cols-3 mt-5 gap-3">
            <div className="col-span-2 w-full flex">
                <textarea className="m-5 w-full h-36 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Names">
                </textarea>
            </div>
            <div className="col-span-1 mr-5">
                <select className="w-full px-3 py-5 my-8 rounded-lg border border-gray-300 bg-gray-50" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    )
}
