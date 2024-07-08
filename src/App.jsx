import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  let[location,setLocation]=useState("location")
  let[details,setDetails]=useState({
    temp:20,
    humidity:20,
    wind:2.5,
    img:"https://openweathermap.org/img/wn/10d@2x.png",
    });
    let handleSubmit=(e)=>{
      e.preventDefault();
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d83b80e7283958f4f9a8c4e2cc36d5e3`)
      .then(
        ({data})=>{
          let{name,main,wind,weather}=data;
          // console.log(data);
          setDetails({
            humidity:main.humidity,
            wind:wind.speed,
            temp:parseInt(main.temp-273.15),
            img: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
          });
          setLocation(name);
        },
        (e)=>e
      );
    }
  return (
    <div className='container'>
     <div className='sub'>
      <h2 className='title p-1'>Weather App</h2>
      <form onSubmit={handleSubmit} >
      <input className='text-box rounded-3 border-primary px-3' type="text"
      name='location'
      id='location'
      placeholder='Enter City Name'
      onChange={(e)=>setLocation(e.target.value)}
      />
      <br/>
      <button type='submit' className='btn btn-outline-primary'>Get Weather</button>
     </form>
     <div className='display_temp'>
      <h3 className='loc'>{location}</h3>
    
      <img src={details.img}
       alt="img-1"
       style={{width:"100px",height:"100px"}}  className='loc'/>
      <h1 className='temp'>{details.temp}℃</h1>
     </div>
     <div className='display-details'>
      <aside>
        <h3 className='humidity'>Humidity: {details.humidity}%</h3>
      </aside>
      <aside>
        <h3 className='speed '>
          Wind-Speed: {details.wind}km/hr
        </h3>
      </aside>
     </div>
     </div>
    </div>
  )
}

export default App;
