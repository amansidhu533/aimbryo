import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeDistributionChart = () => {
  const data = {
    labels: ['<30', '35 - 37', '38 - 40', '41 - 42'],
    datasets: [
      {
        label: 'Patients',
        data: [25000, 65000, 90000, 60000], // Replace with your data
        backgroundColor: 'rgba(146, 132, 255, 0.1)', // Light background color
        barThickness: 36, // Bar width
        // Use an array for borderRadius to round both top and bottom corners
        borderRadius: {
          topLeft: 12, // Top left corner
          topRight: 12, // Top right corner
          bottomLeft: 12, // Bottom left corner
          bottomRight: 12, // Bottom right corner
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Make the chart fill the container
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No grid on X-axis
        },
        ticks: {
          color: '#888', // Light color for X-axis labels
        },
        title: {
          display: true, // Enable X-axis label
          text: 'SART Age', // X-axis label text
          color: '#a4a7aa', // Label color
          font: {
            size: 12, // Font size
            weight: '400', // Font weight
            color: '#a4a7aa', // Font color
          },
        },
      },
      y: {
        grid: {
          display: false, // Display vertical grid lines
          color: 'rgba(200, 200, 200, 0.2)', // Light grid line color
          borderDash: [2, 4], // Dashed vertical grid lines
        },
        ticks: {
          color: '#888', // Light color for Y-axis labels
          stepSize: 10000, // Steps of 10K
          callback: function(value) {
            return value / 1000 + 'K'; // Format numbers as 10K, 20K, etc.
          },
        },
        min: 0,
        max: 100000,
        title: {
          display: true, // Enable Y-axis label
          text: 'Patients', // Y-axis label text
          color: '#a4a7aa', // Label color
          font: {
            family: 'Poppins',
            size: 12, // Font size
            weight: '400', // Font weight
            color: '#a4a7aa', // Font color
          },
        },
      },
    },
  };

  // Define styles for full height container
  const containerStyle = {
    width: '100%',
    height: '400px', // Adjust this value to control the height
  };

  return (
    <div style={containerStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AgeDistributionChart;
