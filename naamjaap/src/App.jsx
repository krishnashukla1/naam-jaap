// // File: client/src/App.jsx
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [startTime, setStartTime] = useState(null);
//   const [duration, setDuration] = useState(0);
//   const [malas, setMalas] = useState(0);
//   const [malaLog, setMalaLog] = useState([]);

//   useEffect(() => {
//     let timer;
//     if (startTime) {
//       timer = setInterval(() => {
//         setDuration(Math.floor((Date.now() - startTime) / 1000));
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [startTime]);

//   const handleCount = () => {
//     if (!startTime) setStartTime(Date.now());
//     const newCount = count + 1;
//     setCount(newCount);
//     if (newCount % 108 === 0) {
//       setMalas(malas + 1);
//       setMalaLog([...malaLog, { mala: malas + 1, count: 108, time: formatTime(duration) }]);
//     }
//   };

//   const formatTime = (s) => {
//     const m = String(Math.floor(s / 60)).padStart(2, '0');
//     const sec = String(s % 60).padStart(2, '0');
//     return `${m}:${sec}`;
//   };

//   return (
//     <div className="app">
//       <header>
//         <h1>Krishna Naam Jaap Counter</h1>
//       </header>
//       <div className="counter-circle">{count}</div>
//       <div className="stats">
//         <div>Malas: {malas}</div>
//         <div>Chants: {count}</div>
//         <div>Time: {formatTime(duration)}</div>
//       </div>
//       <div className="modes">
//         <label><input type="radio" name="mode" checked readOnly /> Manual</label>
//       </div>
//       <button className="count-button" onClick={handleCount}>+ Count</button>

//       {malaLog.length > 0 && (
//         <div className="mala-log">
//           <h2>Mala Completion Tracker</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Mala #</th>
//                 <th>Count</th>
//                 <th>Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {malaLog.map((entry, idx) => (
//                 <tr key={idx}>
//                   <td>{entry.mala}</td>
//                   <td>{entry.count}</td>
//                   <td>{entry.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//=====================================
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GuidePage from './pages/Guide';


function App() {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [malas, setMalas] = useState(0);
  const [malaLog, setMalaLog] = useState([]);

  useEffect(() => {
    let timer;
    if (startTime) {
      timer = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime]);

  const handleCount = () => {
    if (!startTime) setStartTime(Date.now());
    const newCount = count + 1;
    setCount(newCount);
    if (newCount % 108 === 0) {
      setMalas(malas + 1);
      setMalaLog([...malaLog, { mala: malas + 1, count: 108, time: formatTime(duration) }]);
    }
  };

  const handleStop = () => {
    setStartTime(null);
  };

  const handleReset = () => {
    setCount(0);
    setMalas(0);
    setDuration(0);
    setStartTime(null);
    setMalaLog([]);
  };

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <div className="app">
       <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/guide" element={<GuidePage />} />
     
      </Routes>
      </Router>
      <header>
        <h1>Krishna Naam Japa Counter</h1>
      </header>
      <div className="counter-circle">{count}</div>
      <div className="stats">
        <div>Malas: {malas}</div>
        <div>Chants: {count}</div>
        <div>Time: {formatTime(duration)}</div>
      </div>
      <div className="modes">
        <label><input type="radio" name="mode" checked readOnly /> Manual</label>
      </div>
      <div className="button-group">
        <button className="count-button" onClick={handleCount}>+ Count</button>
        <button className="stop-button" onClick={handleStop}>Stop</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>

      {malaLog.length > 0 && (
        <div className="mala-log">
          <h2>Mala Completion Tracker</h2>
          <table>
            <thead>
              <tr>
                <th>Mala #</th>
                <th>Count</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {malaLog.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.mala}</td>
                  <td>{entry.count}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
