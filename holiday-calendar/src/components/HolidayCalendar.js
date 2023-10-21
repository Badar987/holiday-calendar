import React, { useEffect } from "react";
import { fetchHolidays } from "../redux/actions/holidayActions";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const HolidayCalendar = () => {
  const dispatch = useDispatch();
  const holidays = useSelector((state) => state.holidays);

  useEffect(() => {
    // Fetch holidays when the component loads or when country and year change
    // You can adapt this as needed.
    dispatch(fetchHolidays('US', 2023)); // Default fetch for United States in 2023
  }, [dispatch]);

  return (
    <div className="holiday-calendar">
      <h2>Holiday Calendar</h2>
      <Calendar
        localizer={localizer}
        events={holidays.map((holiday) => ({
          start: new Date(holiday.date.iso),
          end: new Date(holiday.date.iso),
          title: holiday.name,
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default HolidayCalendar;
