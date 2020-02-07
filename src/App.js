import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Countdown from './counter/counter';

function App() {
  return (
    <div className="App">
      <Countdown timeTillDate="02 06 2021, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
    </div>
  );
}

export default App;
