// ChartComponent.js
import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON file 
    fetch('/public/earningspermonth.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='flex justify-center'>
      <BarChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="company" fill="#8884d8" activeBar={<Rectangle fill="F0FFFF" stroke="00FFFF" />} />
        <Bar dataKey="employee" fill="#82ca9d" activeBar={<Rectangle fill="FFE4C4" stroke="5F9EA0" />} />
        <Bar dataKey="jobs" fill="#6495ED" activeBar={<Rectangle fill="6495ED" stroke="DC143C" />} />
      </BarChart>
    </div>
  );
};

export default Analytics;
