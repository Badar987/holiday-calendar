import React, { useState } from "react";
import HolidayCalendar from "./components/HolidayCalendar";
import store from "./components/store";
import "./App.css";

function App() {
  const [country, setCountry] = useState("US"); // Default country, you can change it
  const [year, setYear] = useState(new Date().getFullYear()); // Default year, set to current year

  return (
    <div className="App">
      <h1>Holiday Calendar</h1>
      <div className="selection-container">
        <label>Select Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          {/* Add more country options here */}
        </select>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <HolidayCalendar country={country} year={year} />
    </div>
  );
}

export default App;
