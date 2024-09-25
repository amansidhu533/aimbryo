import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityGraph = () => {
    const [view, setView] = useState('week'); // default view is weekly
    const [activeTab, setActiveTab] = useState('patients');

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: activeTab === 'patients' ? 'Total Patients' : 'Total Embryo Graded',
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
                hoverBorderColor: 'rgba(153, 102, 255, 1)',
                data: view === 'week' ? [12, 19, 3, 5, 2, 3, 10] : [2, 3, 1, 4, 2, 1, 0], // Mock data, replace with actual
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#F9FAFC', borderRadius: '10px' }}>
            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => setActiveTab('patients')}
                    style={{
                        display: 'block',
                        backgroundColor: activeTab === 'patients' ? '#F0F0FF' : 'transparent',
                        padding: '10px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        width: '100%',
                        textAlign: 'left',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <i className="icon-patients" style={{ marginRight: '10px' }} /> Total Patients
                </button>
                <button
                    onClick={() => setActiveTab('embryo')}
                    style={{
                        display: 'block',
                        backgroundColor: activeTab === 'embryo' ? '#F0F0FF' : 'transparent',
                        padding: '10px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        width: '100%',
                        textAlign: 'left',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <i className="icon-embryo" style={{ marginRight: '10px' }} /> Total Embryo Graded
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <select
                    onChange={(e) => setView(e.target.value)}
                    value={view}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        width: '100%',
                    }}
                >
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                </select>
            </div>

            <Bar data={data} options={options} />
        </div>
    );
};

export default ActivityGraph;
