const apikey="7438189faccdc423c9e3193c8a28276f";



const getWeather=async(city)=>{
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
  .then((res)=>res.json())
  .then((json)=>{
    return json;
  })
}

export default getWeather;

