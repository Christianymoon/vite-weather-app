import { useEffect, useState } from "react"
import { getData } from "../api.weather"


export function Background() {

    const [time, setTime] = useState('default')
    const [background, setBackground] = useState('default')


    useEffect(() => {
        async function getBackground() {
            const res = await getData(21.120231, -101.677397)
            setTime(res.data.current.time)
        }
        getBackground()

    }, [])

    useEffect(() => {
        async function validateHour() {
            const fomratedDate = new Date(time)
            if (fomratedDate.getHours() > 0 && fomratedDate.getHours() < 19) {
                setBackground('src/assets/sunrays.jpeg')
            } else {
                setBackground('src/assets/windowsxpnight.jpeg')
            }
        }

        validateHour()
    }, [time])

    return (
        <img src={ background } className="absolute opacity-70 w-full h-full"></img>
    )
}