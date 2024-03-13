import { useCallback,useEffect,useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

import './App.css';
import search_icon from "./Component/search.svg";
import clear_day from  "./Component/clear-day.svg"
import clear_night from  "./Component/clear-night.svg"
import cloud_icon from  "./Component/cloudy.svg"
import haze_day from  "./Component/haze-day.svg"
import haze_night from  "./Component/haze-night.svg"
import drizzle_icon from  "./Component/drizzle.svg"
import mist from  "./Component/mist.svg"
import humidity_icon from  "./Component/humidity.png"
import thunder_day from  "./Component/thunderstorms-day-rain.svg"
import rain_icon from  "./Component/rain.svg"
// import snow_icon from  "./Component/snow.svg"
import wind_icon from  "./Component/wind.png"
import error from './Component/error';

function App() {
     let api_key = "d2f9b3beb4aa181edd0ecf94473c782f";
     const [element,setelement]=useState("kanpur");
     const [humidity,sethumidity]=useState("26%");
    //  const navigate=useNavigate();
     
     const [temp,settemp]=useState("");
     const [wind,setwind]=useState("");
     const [location,setlocation]=useState("");
     const [country,setcountry]=useState("");
     const [ic,setic]=useState("");
     
   
      const search = async()=> {
        // const element = document.getElementById("CityInput").value;
        try {
        console.log(element);
        if(element===""){
          // element = "Kanpur";
          return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`;
      
        let response = await fetch(url);
        let data =  await response.json();
        console.log(data);
        if(data.cod == 404){
          alert("Enter the Correct city")
          return 0;
        }
    
       
    
        sethumidity(()=>data?.main.humidity+"%")
        setlocation(()=>data?.name)
        setcountry(data?.sys.country)
        settemp(Math.floor(data?.main.temp)+"°C")
        setwind(Math.floor(data?.wind.speed)+"Kmph")
        
        
        
        
        // console.log(iconcode)
        if(data?.cod!=404){
          const iconcode=data?.weather[0].icon;
          console.log(data.cod)
          if(iconcode === "01d"){
          //clear sky
          setic("https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg");
    
        }else if(iconcode === "02d"){
          //fewClouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg");
    
        }else if(iconcode === "03d"){
          //scattered clouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg");
    
        }else if(iconcode === "04d"){
          // broken clouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg");
    
        }else if(iconcode === "09d"){
          // shower RAin
          setic("https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-rain.svg");
    
        }else if(iconcode === "11d"){
          // thunderstorm
          setic("https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-rain.svg");
    
        }else if(iconcode === "13d"){
          // Snow
          setic("https://basmilius.github.io/weather-icons/production/fill/all/snow.svg");
    
        }else if(iconcode === "50d"){
          // mist
          setic("https://basmilius.github.io/weather-icons/production/fill/all/mist.svg");
    
        }else if(iconcode === "10d"){
          // rain
          setic("https://basmilius.github.io/weather-icons/production/fill/all/rain.svg");
    
        }
    
        //night Icon
        else if(iconcode === "01n"){
          //clear sky
          setic("https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg");
    
        }else if(iconcode === "02n"){
          //fewClouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg");
    
        }else if(iconcode ==="03n"){
          //scattered clouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg");
    
        }else if(iconcode ==="04n"){
          // broken clouds
          setic("https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg");
    
        }else if(iconcode === "09n"){
          // shower RAin
          setic("https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg");
    
        }else if(iconcode === "11n"){
          // thunderstorm
          setic("https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night-rain.svg");
    
        }else if(iconcode === "13n"){
          // Snow
          setic("https://basmilius.github.io/weather-icons/production/fill/all/snow.svg");
        }else if(iconcode === "50n"){
          // mist
          setic("https://basmilius.github.io/weather-icons/production/fill/all/mist.svg");
    
        }else if(iconcode === "10n"){
          // rain
          setic("https://basmilius.github.io/weather-icons/production/fill/all/rain.svg");
    
        }

        }else{
          // alert("data.message")
        }
        //  console.log(data.sys.country)
    
    
      } catch (error) {
        console.log("gaad marao",error);
       
      }
        
    
       }
       useEffect(
        ()=>{search()}
        ,[]);
   
  
  return (
   <>
   <div className='bg-cover m-0  sm:pt-[30px]  sm:bg-[url("https://images.unsplash.com/photo-1588706797058-f8a5325779ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <div className=" @apply w-[384px] sm:w-[607px] h-[900px] sm:h-[700px] m-auto  justify-center rounded-3xl sm:backdrop-blur-sm  sm:bg-white/30 sm:border-2 ">
        <div className=" @apply flex justify-center  gap-3.5 pt-[60px] rounded-3xl">
          <form onSubmit={(e)=>{
          e.preventDefault();
          search();
          }
          }>
          <input id="CityInput" type="text" className=" flex w-[283px] sm:w-[362px] h-[56px] bg-slate-50 border-0 outline-none rounded-full pl-10 text-lime-950 text-xl font-normal" placeholder='Search' 
          onChange={(e)=>setelement(e.target.value)}
          />
          </form>
          
          <div className=" flex justify-center align-middle w-[56px] h-[56px] bg-slate-50 rounded-full cursor-pointer" onClick={()=>{search()}}>
            <img className='w-[20px]' src={search_icon} alt="" />
            
          </div>
        </div>
        <div id="Icon" className='  mt-2.5 flex justify-center'> 
        <img className='w-[240px]' src={ic} alt="" />
        </div>
        <div id="temp" className='flex justify-center mt-[59px] sm:mt-0 text-teal-300 text-9xl font-normal'>
          {temp}
        </div>
        <div>
        <div id='location' className='flex justify-center text-teal-200 text-5xl font-normal mt-5'>
          {location}<span>,</span> <span id="ishu" className='text-5xl'>{country}</span>
        </div>
        </div>
        
        <div className='mt-32 sm:mt-12 text-teal-200 flex justify-center '>
          <div className='m-auto flex items-start gap-3 '>
            <img src={humidity_icon} alt="" className="mt-2.5" />
            <div className='text-4xl font-normal'>
              <div id="humidity">{humidity}</div>
              <div className="text-xl font-normal">Humidity</div>
            </div>
          </div>
          <div className='m-auto flex items-start gap-3 '>
            <img src={wind_icon} alt="" className="mt-2.5" />
            <div className='text-4xl font-normal'>
              <div id="wind">{wind}</div>
              <div className="text-xl font-normal">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   </>

  );
}

export default App;
