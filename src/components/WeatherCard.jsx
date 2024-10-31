import { getData } from "../api.weather";
import { useEffect, useState } from "react";


export function Card() {

  const [temperature, setTemperature] = useState('')
  const [hour, setHour] = useState('default')
  const [icon, setIcon] = useState('')
  const [timezone, setTimezone] = useState('default')
  const [image, setImage] = useState('default')
  


  useEffect(() => {
    async function weatherData() {
      const res = await getData(21.120231, -101.677397)
      setTemperature(res.data.current.temperature_2m + " " + res.data.current_units.temperature_2m)
      setHour(res.data.current.time)
      setTimezone(res.data.timezone)
    }

    weatherData()

  }, [])

  useEffect(() => {
    async function changeEffect() {
      const date = new Date(hour)
      setHour(hour)
      if (date.getHours() > 0 && date.getHours() < 19) {
        setIcon('/src/assets/brightness-alt-high.svg')
        setImage('/src/assets/sunnyday.jpeg')
      } else {
        setIcon('/src/assets/moon.svg')
        setImage('/src/assets/frutigernight.jpeg')
      }
    }

    changeEffect()
  }, [hour])

  return (
    <div className="card relative flex flex-col w-full md:w-4/12 h-full rounded-lg py-5 px-5 m-10 justify-center items-center
    bg-white/20 shadow-lg sm:rounded-3xl bg-opacity-60 border hover:cursor-pointer
    ">
      
      <div className="image-container">
        <img className="image rounded-lg" src={ image }></img>
      </div>
      
      <div className="current-weather-icon py-5">
        <img className="icons" src={icon} alt="" />
      </div>
      <h1 className="uppercase font-bold text-xl py-2">León, Guanajuato</h1>
      <h1 className="uppercase font-bold"> Temperature: </h1><h1 className="uppercase font-bold text-xl">{ temperature }</h1>
      <h4>{ timezone }</h4>
      <h4 className="py-3"> Date: { hour }</h4>
    </div>
    )

}