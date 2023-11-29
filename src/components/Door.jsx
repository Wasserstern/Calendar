import {useState, useEffect, useRef} from "react"
import "./Door.css"
export default function Door({isLocked}){

    const [isOpen, setIsOpened] = useState(false)
    function openDoor(){
        if(isLocked){
            // Play locked animation
        }
        else{
            setIsOpened(!isOpen);
        }
    }
    let doorClassName = "Door"
    if(isLocked){
        doorClassName += " Locked"
    }
    else{
        doorClassName += " Unlocked"
    }
    if(isOpen){
        doorClassName += " Open"
    }
    else{
        doorClassName += " Closed"
    }

    return(
        <div onClick={openDoor} className={doorClassName}>
            {isOpen ? "Open" : "Closed"}
        </div>
    )
}