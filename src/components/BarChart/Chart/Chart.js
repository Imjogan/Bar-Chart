import './Chart.css';
import { useState, useEffect } from 'react';

export const Chart = ({ dataForChart }) => {
  const [styleOnChart, setStyleOnChart] = useState({
    height: `0px`,
    backgroundColor: `black`,
  });
  const [styleOnValue, setStyleOnValue] = useState({
    color: `black`,
  });

  useEffect(() => {
    if (dataForChart) {
      setStyleOnChart({
        height: `${dataForChart.value}px`,
        backgroundColor: `${dataForChart.color}`,
      });
      setStyleOnValue({
        color: `${dataForChart.color}`,
      });
    }
  }, [dataForChart]);

  return (
    <section className="chart">
      <h2 style={styleOnValue} className="chart__value">
        {dataForChart.value}
      </h2>
      <div style={styleOnChart} className="chart__column" />
    </section>
  );
};
