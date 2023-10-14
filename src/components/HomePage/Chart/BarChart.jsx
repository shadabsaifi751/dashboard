import ReactEChart from "echarts-for-react";
import styles from "./chat.module.scss";

export default function BarChart() {
  const eChartsOption = {
    title: {
      // title of our chart
      //   text: "Bar Chart",
    },
    color: ["#040440"],
    xAxis: {
      // name of X Axis
    //   name: "X Axis",
      type: "category",
      // Contains the values for XAxis
      data: ["One", "Two", "Three", "Four", "Five", "Six","Three", "Four", "Five", "Six"],
    },
    yAxis: {
      // name of Y Axis
      //   name: "Y Axis",
      type: "value",
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        // saveAsImage: {},
      },
    },

    series: {
      data: [401, 300, 600, 400, 950, 650, 800, 900, 1200,1400],
      type: "bar",
    },
  };
  return (
    <div className={styles.barchar_wrapper}>
      <ReactEChart
        style={{
          width: "100%",
          height: "400px",
        }}
        option={eChartsOption}
      />
    </div>
  );
}
