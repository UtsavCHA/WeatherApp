// import "boostrap/dist/css/bootstrap.min.css"
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const apiKey="a33df0779b65fef9a0f7e99079f1f606"
  const[data,setData] = useState({});
  const[inputCity,setInputCity] = useState("")
const getWeatherDetails = (cityName)=>{
   const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
   axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
    setData(res.data);
   }).catch((err) =>{
    console.log("err",err)
   })
}
const handleChangeInput = (e) =>{
  setInputCity(e.target.value)
}
const handleSearch = () =>{
  getWeatherDetails(inputCity)
}
useEffect(()=>{
  getWeatherDetails("Delhi")
},[])
  return (
 <div className="col-md-12">
  <div className="weatherBg">
     <h1 className="heading">Weather APP</h1>
     <div className="d-grid gap-3 col-4 mt-4">
     <input type="text" className="form-control" onChange={handleChangeInput} value={inputCity}></input>
     <button className="btn btn-primary" type="button" onClick={handleSearch} >Search</button>
  </div>
 </div>
 <div className="col-md-12 text-center mt-5">
  <div className="shadow rounded wetherResultBox">
    <img className="weatherIcon"
    src="weather-forecast-146472_640.png"></img>
    <h5 className="weatherCity">{data.name}</h5>
    <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
  </div>
 </div>
 </div>
  );
}

export default App;
