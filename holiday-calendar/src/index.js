import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import CountryYearSelection from "./components/CountryYearSelection";
import HolidayCalendar from "./components/HolidayCalendar";
import "./App.css";
ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <h1>Holiday Calendar</h1>
      <CountryYearSelection />
      <HolidayCalendar />
    </div>
  </Provider>,
  document.getElementById("root")
);
