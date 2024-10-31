 
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getFutureDate } from "../api.weather";


 
export function LineChart() {

    const [chartLineData, setChartLineData] = useState({
    labels: [], // Etiquetas vacías para el eje X
    datasets: [
            {
                label: "Temperatura °C",
                backgroundColor: "blue",
                borderColor: "blue",
                data: [], // Datos vacíos para el eje Y
            },
        ],
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white', // Cambia el color de la leyenda
                },
            },
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", // Color de la cuadrícula en el eje X
                },
                ticks: {
                    color: "white", // Color de las etiquetas en el eje X
                },
            },
            y: {
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", // Color de la cuadrícula en el eje Y
                },
                ticks: {
                    color: "white", // Color de las etiquetas en el eje Y
                },
            },
        },
    };

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        async function getAllDayData() {

            try {

                const response = await getFutureDate(21.120231, -101.677397)
                setWeatherData(response.data)

            } catch(error) {

                console.error(error)
            }
            
        }   

        getAllDayData()

    }, [])

    useEffect(() => {   
        function ConfigureChartLineData() {
            if (weatherData == null) {
                return
            }
            const times = weatherData.hourly.time
            const dates = []
            times.map((time) => {
                const date_current = new Date(time)
                const hours = date_current.getHours().toString().padStart(2, '0'); // "14"
                const minutes = date_current.getMinutes().toString().padStart(2, '0'); // "45"
                const timeString = `${hours}:${minutes}`; 
                dates.push(timeString)
            })

            

            const temperatures = weatherData.hourly.temperature_2m
            const newData = {
                labels: dates,
                datasets: [
                    {
                        label: "Temperatura °C",
                        backgroundColor: "#1f263b",
                        borderColor: "#1f263b",
                        data: temperatures,
                    },
                ],
            };

            setChartLineData(newData)
        }

        ConfigureChartLineData()
        
    }, [weatherData])  

            

    return (
        <div className="relative w-full px-1 py-1 m-10 md:px-4 md:py-5 md:w-10/12 md:m-10
        bg-white/20 shadow-lg sm:rounded-3xl border hover:cursor-pointer
        ">
            <h1 className="uppercase font-bold text-xl text-white py-2 px-4">León de los Aldama</h1>
            <Line data={chartLineData} options={options} />
        </div>
    );
}