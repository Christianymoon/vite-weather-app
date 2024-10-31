import { Card } from "../components/WeatherCard";
import { Background } from "../components/Background";
import { LineChart } from "../components/Graphic"
import { Info } from "../components/Info";

export function Principal() {
  return (
    <div className="super md:flex-row mx-auto flex flex-col justify-baseline items-center">
      <Background />
      <Card />
      <div className="info w-full flex flex-col justify-center items-center mx-auto md:w-8/12">
        <Info />
        <LineChart />
      </div>
    </div>

  )

}