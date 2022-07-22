import React, { useState } from 'react';

export default function Form() {
    // Variable for selected teams
    const [select, setSelect] = useState("1");

    // Variable for text field
    const [names, setNames] =  useState([]);
    
    // Sets names value
    const handleTextField = (e) => {
        const value = e.target.value
        setNames(value)
    }

    // Sets select value 
    const handleSelect = (e) => {
        const value = e.target.value
        setSelect(value)
    }

    const handleButton = (e) => {
        // Names from textfield gets separated by "enterspace" and put inside an array
        const arr = names.split(/\r?\n/);


        var team1 = [];
        var team2 = [];

        for(let i = 0; i <= arr.length; i++) {
            // Shuffle array
            var shuffledArray = arr.sort(() => Math.random() - 0.5);
            console.log("shuffledArray length: " + shuffledArray.length);
            
            // Finds modulo
            var modulo = shuffledArray.length % select;
            console.log("Modulo er: " + modulo)

            // If modulo is 0. put player to a team
            if(modulo === 0) {
                team1.push(shuffledArray[0]);
                console.log("Team 1: " + team1)
                shuffledArray.shift();
                console.log(shuffledArray + " Fra shuffledArray 1");
                
            } else {
                team2.push(shuffledArray[0]);
                console.log("Team 2: " + team2)
                shuffledArray.shift();
                console.log(shuffledArray + " Fra shuffledArray 2");
                i--;
            }
            console.log("Dette er i: " + i)
        }
        
        console.log("leftovers: " + shuffledArray);
        console.log("team 1: " + team1);
        console.log("team 2: " + team2);
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
