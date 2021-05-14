import './BarChart.css';
import { Chart } from './Chart/Chart';
import { useState, useEffect } from 'react';

export const BarChart = ({ data }) => {
  const [styleOnBarChart, setStyleOnBarChart] = useState({
    height: `0px`,
  });

  useEffect(() => {
    if (data) {
      const maxValue = data.reduce((acc, curr) =>
        acc.value > curr.value ? acc : curr
      ).value;
      setStyleOnBarChart({
        height: `${maxValue + 40}px`,
      });
    }
  }, [data]);

  return (
    <section style={styleOnBarChart} className="bar-chart">
      {data.map((dataForChart, i) => (
        <Chart key={i} dataForChart={dataForChart} />
      ))}
    </section>
  );
};
