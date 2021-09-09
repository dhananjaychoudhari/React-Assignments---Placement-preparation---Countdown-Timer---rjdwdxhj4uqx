import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [time1, setTime1] = useState();

  useEffect(() => {
    let x = setInterval(() => {
      setTime1(time1 - 1);
    }, 1000)
    return () => {
      clearInterval(x);
    }
  }, [time1])
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(event) => {
            let no = Number(event.target.value);
            setTime1(Math.floor(no));
          }} /> sec.
        </h1>
      </div>
      <div id="current-time">{
        (isNaN(time1) || time1 <= 0) ? 0 : Math.floor(time1)
        // time1
      }</div>
    </div>
  )
}


export default App;
