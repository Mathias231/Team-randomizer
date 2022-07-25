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
        console.log(arr);

        // Shuffle array
        var shuffledArray = arr.sort(() => Math.random() - 0.5);
        console.log("shuffledArray length: " + shuffledArray.length);

        // Teams
        var team1 = [];
        var team2 = [];
        var team3 = [];
        var team4 = [];

        switch(select) {
            case "1":
                team1.push(shuffledArray);
                break;
            case "2":
                for(let i = 0; i = arr.length; i++) {
                    // Finds modulo
                    var modulo2 = shuffledArray.length % select;
                    console.log("Modulo er: " + modulo2)
        
                    // If modulo is 0, put player to team 1
                    if(modulo2 === 0) {
                        team1.push(shuffledArray[0]);
                        console.log("Team 1: " + team1)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 1");
                    } else {
                        team2.push(shuffledArray[0]);
                        console.log("Team 2: " + team2)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 2");
                    }
                    console.log("Dette er i: " + i)
                }
                break;
            case "3":
                for(let i = 0; i = arr.length; i++) {
                    // Finds modulo
                    var modulo3 = shuffledArray.length % select;
                    console.log("Modulo er: " + modulo3)
        
                    // If modulo is 0, put player to team 1
                    if(modulo3 === 0) {
                        team1.push(shuffledArray[0]);
                        console.log("Team 1: " + team1)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 1");
                    } else if(modulo3 === 2) {
                        team2.push(shuffledArray[0]);
                        console.log("Team 2: " + team2)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 2");
                    } else {
                        team3.push(shuffledArray[0]);
                        console.log("Team 2: " + team3)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 3");
                    }
                    console.log("Dette er i: " + i)
                }
                break;
            case "4":
                for(let i = 0; i = arr.length; i++) {
                    // Finds modulo
                    var modulo4 = shuffledArray.length % select;
                    console.log("Modulo er: " + modulo3)
        
                    // If modulo is 0, put player to team 1
                    if(modulo4 === 0) {
                        team1.push(shuffledArray[0]);
                        console.log("Team 1: " + team1)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 1");
                    } else if(modulo4 === 2) {
                        team2.push(shuffledArray[0]);
                        console.log("Team 2: " + team2)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 2");
                    } else if(modulo4 === 3) {
                        team3.push(shuffledArray[0]);
                        console.log("Team 2: " + team3)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 2");
                    } else {
                        team4.push(shuffledArray[0]);
                        console.log("Team 2: " + team4)
                        shuffledArray.shift();
                        console.log(shuffledArray + " Fra shuffledArray 3");
                    }
                    console.log("Dette er i: " + i)
                }
                break;
        }

        console.log("Leftovers: " + shuffledArray);
        console.log("Team 1: " + team1);
        console.log("Team 2: " + team2);
        console.log("Team 3: " + team3);
        console.log("Team 4: " + team4);
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
