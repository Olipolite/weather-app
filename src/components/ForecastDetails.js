import React from "react";
import PropTypes from "prop-types";
import {
  WiDirectionUp,
  WiDirectionDown,
  WiHumidity,
  WiStrongWind,
} from "react-icons/wi";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const {
    temperature, date, humidity, wind,
  } = forecast;

  const formattedDate = new Date(date).toLocaleDateString("en-uk", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {formattedDate}
      </div>
      <div className="forecast-details__temperature">
        <WiDirectionUp className="wind-direction__up" />
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature">
        <WiDirectionDown />
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        <WiHumidity />
        {humidity}
        %
      </div>
      <div className="forecast-details__speed">
        <WiStrongWind />
        {wind.speed}
        mph
      </div>
      {/* <div className="forecast-details__direction">
        {wind.direction}
      </div> */}
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    icon: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
