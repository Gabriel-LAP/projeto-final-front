// import { useRef } from 'react';
// import { getDatasetAtEvent } from 'react-chartjs-2';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Painel Financeiro',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       id: 1,
//       label: labels[0],
//       data: [5, 6, 7],
//       backgroundColor: 'red',
//     },
//     {
//       id: 2,
//       label: labels[1],
//       data: [3, 2, 1],
//       backgroundColor: 'purple',
//     },
//   ],
// };

// export function App() {
//   const chartRef = useRef();
//   //   const handleClick = (event) => {
//   //     console.log(getDatasetAtEvent(chartRef.current, event));
//   //   };
//   return <Bar options={options} data={data} />;

//   return <Bar options={options} ref={chartRef} data={data} />;
// }
