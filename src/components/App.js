import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import getForecast from "../requests/getForecast";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";
import SearchForm from "./SearchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchText);
  };

  return (
    <div className="weather-app">
      <div className="location-details">
        <LocationDetails city={location.city} country={location.country} />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
      </div>
      <div>
        <div className="selected-forecast">
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </div>
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
      </div>
    </div>
  );
}

export default App;
