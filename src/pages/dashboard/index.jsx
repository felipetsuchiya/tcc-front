import { useState } from "react";
import { UserData } from "../../data/Data";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import Tabela from "../../components/table";

function Dashboard() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Ganho/Mes",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#a81244",
          "#0a9306",
          "#2efa93",
          "#60b564",
          "#cd1bb0",
          "#f2f382",
          "#427761",
          "#2098be",
          "#f489e8",
          "#a1c82b",
          "#5138c6",
          "#7cce8a",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="flex flex-col items-center ml-64">
      <div className="mt-20 flex space-x-10">
        <div className="border-2 border-gray-500 shadow-xl text-gray-900 px-16 py-5 rounded-lg text-center text-xl font-semibold cursor-pointer">
          <div>Prod</div>
          <div>Produtos</div>
        </div>
        <div className="border-2 border-gray-500 shadow-xl text-gray-900 px-16 py-5 rounded-lg text-center text-xl font-semibold cursor-pointer">
          <div>Hist</div>
          <div>Historico</div>
        </div>
        <div className="border-2 border-gray-500 shadow-xl text-gray-900 px-16 py-5 rounded-lg text-center text-xl font-semibold cursor-pointer">
          <div>Prev</div>
          <div>Previsoes</div>
        </div>
      </div>

      <div className="mt-20 space-y-5 space-x-5 flex justify-center items-center">
        <div className="border-2 p-5 rounded-3xl border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Ganho/Mes - 2022</div>
          <PieChart chartData={userData} />
        </div>
        <div className="border-2 p-5 rounded-lg border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Ganho/Mes - 2022</div>
          <BarChart chartData={userData} />
        </div>
        <div className="border-2 p-5 rounded-lg border-black bg-indigo-50">
          <div className="text-center text-2xl font-medium py-2">Ganho/Mes - 2022</div>
          <LineChart chartData={userData} />
        </div>
      </div>
      <div>
        <Tabela />
      </div>
    </div >
  )
}

export default Dashboard;