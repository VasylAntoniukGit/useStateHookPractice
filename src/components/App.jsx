import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [state, setState] = useState(time);

  function getTime() {
    const now = new Date().toLocaleTimeString();
    setState(now);
  }

  setInterval(getTime, 5000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
