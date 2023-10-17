import ReactEChart from "echarts-for-react";
import styles from "./chat.module.scss";
const PieChart = () => {
  const getOption = () => {
    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#F52E92' // color at 0%
          }, {
              offset: 1, color: '#EF4EA4' // color at 100%
          }],
          global: false // default is false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#AD78ED' // color at 0%
          }, {
              offset: 1, color: '#683FEA' // color at 100%
          }],
          global: false // default is false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#F1EFFC' // color at 0%
          }, {
              offset: 1, color: '#CDCDCD' // color at 100%
          }],
          global: false // default is false
        }
      ],
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "65% Total New Customers" },
            { value: 735, name: "10% Old Customers" },
            { value: 580, name: "25% Ragular Customers" },
          ],
          top:"15%"
        },
      ],
    };
  };

  return (
    <div className={styles.barchar_wrapper}>
      <ReactEChart
        option={getOption()}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default PieChart;
