const url = "https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true";

const getWeatherWithPromises = () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.current_weather;

      console.log(`
🌤 Weather Report (Promises Version)
------------------------------------
Temperature: ${weather.temperature}°C
Wind Speed: ${weather.windspeed} km/h
Wind Direction: ${weather.winddirection}°
Time: ${weather.time}
      `);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
};

getWeatherWithPromises();