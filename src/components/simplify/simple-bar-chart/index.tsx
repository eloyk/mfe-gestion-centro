import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Estudiantes por curso',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const BarChart = ({data}:any) => {
  const dataFormat: any = {
    labels: [],
    datasets: [{
      label: 'Inscritos',
      data: [],
      backgroundColor: '#fff',
      stack: 'Stack 0',
    },
    {
      label: 'Faltantes',
      data: [],
      backgroundColor: '#262626',
      stack: 'Stack 0',
    },]
  }
  data.map((item: any) => {
    dataFormat.labels.push(`${item.metricName}`)
    dataFormat.datasets[0].data.push(item.count_student)
    dataFormat.datasets[1].data.push(item.max_quantity - item.count_student)
  })
  return <Bar options={options} data={dataFormat} />;
}
