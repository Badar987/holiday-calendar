import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchHolidays } from "../redux/actions/holidayActions";
import countries from "./Counterys";

const CountryYearSelection = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("US"); // Default country
  const [year, setYear] = useState(new Date().getFullYear()); // Default year

  const handleFetchHolidays = () => {
    dispatch(fetchHolidays(country, year));
  };

  return (
    <div className="country-year-selection">
      <label>Select Country:</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <label>Year:</label>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleFetchHolidays}>Fetch Holidays</button>
    </div>
  );
};

export default CountryYearSelection;
