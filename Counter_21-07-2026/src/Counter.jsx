import React, { useState,} from 'react';

function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);


  return (
    <div>
      <h2>Countdown Timer</h2>
      
      <input
        type="number"
        placeholder="Enter seconds"
        onChange={(e) => setSeconds(Number(e.target.value))}
        disabled={isActive}/>
      
      <h1>{seconds}s</h1>
      
<div>
  <button onClick={() => setIsActive(true)}>Start</button>
  <button onClick={() => setIsActive(false)}>Pause</button>
  <button onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
</div>
    </div>
  );
}

export default Counter;