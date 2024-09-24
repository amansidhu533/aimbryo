import React, { useState } from 'react';
import { Tabs } from 'antd';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const { TabPane } = Tabs;

const DonutChart = () => {
  // Define data for different tabs with partial rings
  const eggData = [
    { name: 'Fresh Self', value:950, color: '#37C577' },     // Green
    { name: 'Frozen Self', value: 600, color: '#3768C5' },    // Blue
    { name: 'Fresh Donor', value: 900, color: '#EC9D3E' },    // Orange
    { name: 'Frozen Donor', value: 550, color: '#C5B037' },   // Olive 
   ];

  const spermData = [
    { name: 'Fresh Self', value: 350, color: '#37C577' },     // Green
    { name: 'Frozen Self', value: 320, color: '#3768C5' },    // Blue
    { name: 'Fresh Donor', value: 270, color: '#EC9D3E' },    // Orange
    { name: 'Frozen Donor', value: 190, color: '#C5B037' },   // Olive 
   ];

  const bothData = [
    { name: 'Fresh Self', value: 450, color: '#37C577' },     // Green
    { name: 'Frozen Self', value: 350, color: '#3768C5' },    // Blue
    { name: 'Fresh Donor', value: 320, color: '#EC9D3E' },    // Orange
    { name: 'Frozen Donor', value: 210, color: '#C5B037' },   // Olive 
   ];

  const [selectedTab, setSelectedTab] = useState('Egg');
  const [chartData, setChartData] = useState(eggData); // Default to Egg data

  const handleTabChange = (key) => {
    setSelectedTab(key);
    // Update chart data based on the selected tab
    if (key === 'Egg') {
      setChartData(eggData);
    } else if (key === 'Sperm') {
      setChartData(spermData);
    } else if (key === 'Both') {
      setChartData(bothData);
    }
  };

  // Function to render concentric layers with partial fill and rounded ends
  const renderConcentricLayers = () => {
    const initialInnerRadius = 60;  // Set small inner radius to keep Frozen Donor in the center
    const outerRadiusIncrement = 15; // Increment reduced to maintain 2px gap
    
    // Reverse the chartData array to render Frozen Donor at the innermost ring
    return chartData.slice().reverse().map((entry, index) => {
      const currentInnerRadius = initialInnerRadius + index * outerRadiusIncrement;
      const currentOuterRadius = currentInnerRadius + outerRadiusIncrement - 2; // Subtract 2px to create the gap

      // Define the full circle with an empty space (total 100% fill)
      const partialRingData = [
        { name: entry.name, value: entry.value, color: entry.color },  // Colored part
        { name: 'Unfilled', value: 1000 - entry.value, color: '#FAFAFA'}  
      ];

      return (
        <Pie
          key={`layer-${index}`}
          data={partialRingData}
          cx={120}
          cy={120}
          startAngle={90}    // Start at the top
          endAngle={-270}    // Sweep clockwise to the right
          innerRadius={currentInnerRadius}
          outerRadius={currentOuterRadius}
          dataKey="value"
          stroke="#FAFAFA"
          cornerRadius={10}  // Rounded edges for the pie
        >
          {partialRingData.map((d, i) => (
            <Cell key={`cell-${i}`} fill={d.color} />
          ))}
        </Pie>
      );
    });
  };

  return (
  <>
      {/* Tabs for selection */}
      <Tabs defaultActiveKey="Egg" onChange={handleTabChange}>
        <TabPane tab="Egg" key="Egg">
          {/* Content for Egg */}
        </TabPane>
        <TabPane tab="Sperm" key="Sperm">
          {/* Content for Sperm */}
        </TabPane>
        <TabPane tab="Both" key="Both">
          {/* Content for Both */}
        </TabPane>
      </Tabs>

      {/* Legends */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
        {chartData.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
            <span style={{ width: '10px', height: '10px',borderRadius:'50%', backgroundColor: item.color, marginRight: '5px' }}></span> {item.name}
          </div>
        ))}
      </div>

 
      <div style={{ backgroundColor: '#FAFAFA' ,width:'250px' ,height:'250px',margin:'15px auto', borderRadius: '50%' }}>
      <PieChart width={250} height={250} backgroundColor="#f00">
        {/* Blank center with background color */}
        <Pie
          data={[{ name: 'Center', value: 1 }]} // Dummy data for the center
          cx={120}
          cy={120}
          innerRadius={0}
          outerRadius={52}
          fill="#F0F0F0"  // Center color
          stroke="none"
        />

        {/* Transparent blank ring */}
        <Pie
          data={[{ name: 'Blank', value: 1 }]} // Dummy data for the blank ring
          cx={120}
          cy={120}
          innerRadius={65}
          outerRadius={75}
          fill="transparent"  // Transparent ring
          stroke="none"
        />

        {/* Actual rings */}
        {renderConcentricLayers()}

        <Tooltip />
      </PieChart></div>
  </>
  );
};

export default DonutChart;
