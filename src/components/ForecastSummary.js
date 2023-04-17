import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";
import WeatherIcon from "react-icons-weather";

function ForecastSummary({
  date, temperature, description, icon, onSelect,
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-uk", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <button className="forecast-summary__button" type="button" onClick={() => onSelect(date)}>
        More
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
