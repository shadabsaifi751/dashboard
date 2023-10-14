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
              fontSize: 10,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
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
