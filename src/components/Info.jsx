import { useEffect, useState } from "react"
import { getInfo } from "../api.weather"

export function Info() {

    const [precipitation, setPrecipitation] = useState('default')
    const [wind, setWind] = useState('default')

    useEffect(() => {
        async function info() {

            const response = await getInfo(21.120231, -101.677397)
            setPrecipitation(response.data.current.precipitation)
            setWind(response.data.current.wind_speed_10m)

        }

        info()

    }, [])

    return (

        <div className="relative px-4 py-5 w-full md:w-10/12 md:m-10
        bg-white/20 shadow-lg sm:rounded-3xl border hover:cursor-pointer
        ">

            <h1 className="text-white uppercase font-bold">Precipitation probability: % {precipitation}</h1>
            <h1 className="text-white uppercase font-bold">Wind Speed: {wind} km/h</h1>

        </div>

    )

}