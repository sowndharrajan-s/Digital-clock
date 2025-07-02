import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer)
  }, []);

  const infrontZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }
  const resetHours = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  };
  const formatDate = (date) => {
    const options = { weekday: "long" , year: "numeric" ,month: "long" ,day :"numeric" }
    return date.toLocaleDateString(undefined,options);
  };

  return (
    <>
      <div className="digital-clock">
        <h1>Digital-clock</h1>
        <div className="time">{infrontZero(resetHours(currentTime.getHours()))} :
          {
            infrontZero(currentTime.getMinutes())
          }:{
            infrontZero(currentTime.getSeconds())
          }
        </div>
        <div className="date">{formatDate(currentTime)}</div>
      </div>

    </>
  )
}

export default App
