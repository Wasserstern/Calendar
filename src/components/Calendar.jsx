import {useState, useEffect, useRef} from "react"
import Door from "./Door"
import "./Calendar.css"
export default function Calendar({doorCount, currentDate}){


    let doors = []
    for(let i = 0; i < doorCount; i++){
        doors.push(
            <Door isLocked={!(i < 12)}></Door>
        )
    }
    function shuffle(array){ 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 
    doors = shuffle(doors);

    return (
        <div className="Calendar">
            {doors}
            {currentDate}
        </div>
    )
}