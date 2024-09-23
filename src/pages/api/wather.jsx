import React, { useEffect, useState } from 'react';
import Navbar from '../components/SearchBar';
import { useGeolocation } from '@uidotdev/usehooks';

function MainApi({ setForecast }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [debouncedFilter, setDebouncedFilter] = useState(filter);
  const { latitude, longitude } = useGeolocation();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherData = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ad30fb7038294b38b25162409242009&q=${query}&aqi=no`
      );
      const data = await response.json();
      if (data.error) {
        setError(data.error.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      setError('Failed to fetch weather data');
    }
  };

  const fetchForecastData = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=ad30fb7038294b38b25162409242009&q=${query}&days=7&aqi=no`
      );
      const data = await response.json();
      if (data.error) {
        setError(data.error.message);
        setForecastData(null);
      } else {
        setForecastData(data.forecast.forecastday);
        setError(null);
        setForecast(data.forecast.forecastday); 
      }
    } catch (error) {
      console.error('Failed to fetch forecast data', error);
      setError('Failed to fetch forecast data');
    }
  };

  useEffect(() => {
    const query = debouncedFilter || (latitude && longitude ? `${latitude},${longitude}` : "");
    if (query) {
      fetchWeatherData(query);
      fetchForecastData(query);
    }
  }, [debouncedFilter, latitude, longitude]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 500);
    return () => clearTimeout(handler);
  }, [filter]);

  const currentCountry = weatherData ? `Weather in ${weatherData.location.name}, ${weatherData.location.country}` : "";

  return (
    <div>
      <Navbar setFilter={setFilter} currentCountry={currentCountry} />

      <div className="text-white flex flex-col items-center justify-center h-screen">
        {error ? (
          <h1>Error: {error}</h1>
        ) : weatherData ? (
          <div>
            <h1 className="text-3xl">{currentCountry}</h1>
            <p className="text-xl">Temperature: {weatherData.current.temp_c}°C</p>
            <p className="text-lg">Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Weather Condition Icon" />
            <p className="text-lg">Humidity: {weatherData.current.humidity}%</p>
          </div>
        ) : (
          <p>Loading location or weather data...</p>
        )}
      </div>
    </div>
  );
}

export default MainApi;
