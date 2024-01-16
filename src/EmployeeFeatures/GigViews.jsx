import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar,
} from "recharts";

const GigViews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch("/public/gigviews.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (


        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="views" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="impressions" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="views" stroke="#ff7300" />
        </ComposedChart>

  );
};

export default GigViews;
