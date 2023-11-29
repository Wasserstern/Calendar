import Calendar from './components/Calendar';
import "./App.css"
function App() {
  const now = new Date();
  return (
    <div className="App">
      <Calendar currentDate={now.getDate()} doorCount={24}></Calendar>
    </div>
  );
}

export default App;
