import { useState } from "react";
import { UserData } from "../../data/Data";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import Tabela from "../../components/table";

function Dashboard() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Ganho/Mes",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20">
          <div>Yoho System</div>
      </div>
      <div>
        <Tabela />
      </div>
      <div className="mt-20 space-y-5">
        <div className="border-2 p-5 rounded-lg border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Pie Chart</div>
          <PieChart chartData={userData} />
        </div>
        <div className="border-2 p-5 rounded-lg border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Bar Chart</div>
          <BarChart chartData={userData} />
        </div>
        <div className="border-2 p-5 rounded-lg border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Line Chart</div>
          <LineChart chartData={userData} />
        </div>
      </div>
    </div >
  )
}

export default Dashboard;