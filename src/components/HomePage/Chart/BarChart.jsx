import ReactEChart from "echarts-for-react";
import styles from "./chat.module.scss";

export default function BarChart() {
  const eChartsOption = {
    title: {
      // title of our chart
      text: "Overview",
      subtext: "Monthly Earning",
      color: "#040440",
      fontSize: 12,
      fontWeight: "500",
      top: 2,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "500",
      },
      subtextStyle: {
        fontSize: 12,
        fontWeight: "500",
        padding: [
          5, // up
          10, // right
          30, // down
          10, // left
        ],
      },
    },
    textStyle: {
      color: "#040440",
      fontSize: 12,
      fontWeight: "500",
    },
    xAxis: {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    color: [
      {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#AD78ED", // color at 0%
          },
          {
            offset: 1,
            color: "#AD78ED", // color at 100%
          },
        ],
        global: false, // default is false
      },
    ],
    yAxis: {
      type: "value",
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    series: {
      barWidth: "70%",
      barCategoryGap: "20%",
      barGap: "30%",
      data: [
        401,
        300,
        600,
        1500,
        1050,
        650,
        {
          value: 2000,
          itemStyle: {
            color: "#5A32EA",
          },
        },
        900,
        1200,
        1400,
        1800,
        1700,
      ],
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
