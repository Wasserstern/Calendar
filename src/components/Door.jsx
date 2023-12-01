import {useState, useEffect, useRef} from "react"
import "./Door.css"
export default function Door({isLocked, openDoors, index, giftMessage}){

    const [isOpen, setIsOpened] = useState(openDoors[index])
    function openDoor(){
        if(isLocked){
            // Play locked animation
        }
        else{
            setIsOpened(!isOpen);
            let newOpenDoors = openDoors;
            newOpenDoors[index] = !isOpen;
            localStorage.setItem("openDoors", JSON.stringify(newOpenDoors));
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

    let gift = ""
    if(isOpen){
        gift = <div className="GiftContainer">
            <div className="GiftMessage">{giftMessage}</div>
        </div>
    }

    return(
        <div onClick={openDoor} className={doorClassName}>
            {isOpen ? "Open" : "Closed"}
            {gift}
        </div>
    )
}