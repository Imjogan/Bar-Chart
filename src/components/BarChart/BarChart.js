import './BarChart.css';
import Chart from './Chart/Chart';
import { useState, useEffect } from 'react';

function BarChart({ data }) {
  const [styleOnBarChart, setStyleOnBarChart] = useState({
    height: `0px`,
  });

  useEffect(() => {
    if (data) {
      const maxValueElement = data.reduce((acc, curr) =>
        acc.value > curr.value ? acc : curr
      );
      setStyleOnBarChart({
        height: `${maxValueElement.value + 40}px`,
      });
    }
  }, []);

  return (
    <section style={styleOnBarChart} className="bar-chart">
      {data.map((dataForChart, i) => (
        <Chart key={i} dataForChart={dataForChart} />
      ))}
    </section>
  );
}

export default BarChart;
