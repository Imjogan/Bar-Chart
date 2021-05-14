import './BarChart.css';
import Chart from './Chart/Chart';

function BarChart({ data }) {
  return (
    <section className="bar-chart">
      {data.map((dataForChart, i) => (
        <Chart key={i} dataForChart={dataForChart} />
      ))}
    </section>
  );
}

export default BarChart;
