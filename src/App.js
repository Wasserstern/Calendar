import {useState, useEffect, useRef} from "react"
import Calendar from './components/Calendar';
import "./App.css"
function App() {
  const [openDoors, setOpenDoor] = useState(() => {
    let currentOpenDoors = localStorage.getItem("openDoors");
    if(currentOpenDoors != null){
      return JSON.parse(currentOpenDoors);
    }
    else{
      return null;
    }
  })

  if(openDoors == null){
    // No item set, set new localStorage item
    let initialOpenDoors = new Array(24);
    initialOpenDoors = initialOpenDoors.fill(false);
    localStorage.setItem( "openDoors", JSON.stringify(initialOpenDoors));
  }

  const now = new Date();
  return (
    <div className="App">
      <Calendar openDoors={openDoors} currentDate={now.getDate()} doorCount={24}></Calendar>
    </div>
  );
}

export default App;
