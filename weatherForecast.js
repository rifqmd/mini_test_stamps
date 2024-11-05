/**
 *  Display the weather forecast for Jakarta for the next 5 days
 * 1. Please use the API provided at http://openweathermap.org.
 * 2. Display the output as the weather forecast for Jakarta for the next 5 days.
 * 3. Only show one temperature per day.
 * 4. This task does not require a paid account.
 */

const apiKey = "5796abbde9106b7da4febfae8c44c232";
const city = "Jakarta";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

const getWeatherForecast = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const forecastForFiveDay = {};

    data.list.forEach((item) => {
      const data = item.dt_txt.split(" ")[0];
      if (!forecastForFiveDay[data]) {
        forecastForFiveDay[data] = item.main.temp;
      }
    });

    console.log("Weather Forecast: ");
    Object.keys(forecastForFiveDay)
      .slice(0, 5)
      .forEach((date) => {
        const options = {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        };
        const formattedDate = new Date(date).toLocaleDateString(
          // "en-US",
          "en-GB",
          options
        );
        console.log(`${formattedDate}: ${forecastForFiveDay[date]}°C`);
        // console.log(`${date}: ${forecastForFiveDay[date]}°C`);
      });
  } catch (error) {
    console.error("error fetching weather data:", error);
  }
};

getWeatherForecast();
