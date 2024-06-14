import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  const sampleData = [15, 20, 40, 50, 40, 40, 45, 33, 40];

//   const data = (canvas) => {
//     const ctx = canvas.getContext("2d");
//     const gradient = ctx.createLinearGradient(0, 0, 0, height);
//     gradient.addColorStop(0, 'rgba(250,174,50,1)');   
//     gradient.addColorStop(1, 'rgba(250,174,50,0)');

  const canvasData = {
    datasets: [
      {
        label: "Workload Reports",
        borderColor: "navy",
        pointRadius: 0,
        fill: true,
        backgroundColor: (context) => {
            const bgColor = [
                "#596cff", "#ffffff"
            ];
            if(!context.chart.chartArea){
                return;
            }
            const { ctx, data, chartArea:{top, bottom}} = context.chart

            const bgGradient = ctx.createLinearGradient(0, top, 0, bottom)

            bgGradient.addColorStop(0, bgColor[0])
            bgGradient.addColorStop(1, bgColor[1])

            return bgGradient

        },
        lineTension: 0.5,
        data: sampleData,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        ticks: {
          color: "blue",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
          
        },
        border: {
          display: false,
        },
        min: 0,
        max: 60,
        ticks: {
          stepSize: 10,
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "2rem",
    height: "350px",
    maxWidth: "1000px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;
