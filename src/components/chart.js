import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  // Static data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [150, 230, 180, 320, 280, 410, 300],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  // Options to customize the appearance and behavior of the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Sales Data Line Chart</h2>
      <div style={{ width: '80%', margin: '20px auto' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
