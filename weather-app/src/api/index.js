
const baseURL = "https://api.weatherapi.com/v1/current.json?key=ba3b0db59efe4c3ea6252705251310"
export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}