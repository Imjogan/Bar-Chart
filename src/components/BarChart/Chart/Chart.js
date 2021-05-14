import './Chart.css';

function Chart({ dataForChart }) {
  const styleOnChart = {
    height: `${dataForChart.value}px`,
    backgroundColor: `${dataForChart.color}`,
  };

  const styleOnValue = {
    color: `${dataForChart.color}`,
  };

  console.log(styleOnChart);
  return (
    <section className="chart">
      <h2 style={styleOnValue} className="chart__value">
        {dataForChart.value}
      </h2>
      <div style={styleOnChart} className="chart__column" />
    </section>
  );
}

export default Chart;
