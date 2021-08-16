import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
     const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximum =Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
