import axios from "axios";

export const fetchHolidays = (country, year) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://calendarific.com/api/v2/holidays?api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs&country=${country}&year=${year}`
    );
    const holidays = response.data.response.holidays;
    dispatch({ type: "FETCH_HOLIDAYS", payload: holidays });
  } catch (error) {
    console.error("Error fetching holidays: ", error);
  }
};
