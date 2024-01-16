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
    
        <BarChart
          width={600}
          height={300}
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
          <Bar dataKey="earned" fill="#8884d8" activeBar={<Rectangle fill="F0FFFF" stroke="00FFFF" />} />
          <Bar dataKey="withdrawn" fill="#82ca9d" activeBar={<Rectangle fill="FFE4C4" stroke="5F9EA0" />} />
          <Bar dataKey="remained" fill="#6495ED" activeBar={<Rectangle fill="6495ED" stroke="DC143C" />} />
        </BarChart>
      
  );
};

export default Analytics;
