import Chart from "../../component/chart/Chart";
import Service from "../../component/service/Service";
import "./home.css";
import { venteData } from "../../DammyData";



export default function Home() {
  return (
    <div className="home">
      <Service />
      <Chart data={venteData} title="Analyse Des Ventes" grid dataKey="prix" />
    </div>
  );
}
