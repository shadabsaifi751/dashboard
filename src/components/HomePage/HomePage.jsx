import React from "react";
import styles from "./dashboard.module.scss";
import useWindowSize from "../../common/windowResize";
import BarChart from "./Chart/BarChart";
import PieChart from "./Chart/PaiChart";

const HomePage = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;

  return (
    <div className={` mt-20 ${styles.home_wrapper}`}>
      {isMobile && <h2 className="mb-30">Hello, Shadab Saifi👋</h2>}
      <div className={styles.cards_wrap}>
        <div className={styles.card}>
          <div className={styles.icon_wrap}>
            <i className={styles.earning}></i>
          </div>
          <div className={styles.card_body}>
            <p className={styles.title}>Earning</p>
            <h4 className={styles.price}>$98K</h4>
            <p className={styles.dicription}>
              <span className={styles.lavel}>↑ 37.8%</span>
              &nbsp;this month
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.icon_wrap} ${styles.orders}`}>
            <i className={styles.orders}></i>
          </div>
          <div className={styles.card_body}>
            <p className={styles.title}>Orders</p>
            <h4 className={styles.price}>$2.4K</h4>
            <p className={styles.dicription}>
              <span className={styles.danger}>&#8595; 2%</span>
              &nbsp;this month
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.icon_wrap} ${styles.balance}`}>
            <i className={styles.balance}></i>
          </div>
          <div className={styles.card_body}>
            <p className={styles.title}>Balance</p>
            <h4 className={styles.price}>$2.4K</h4>
            <p className={styles.dicription}>
              <span className={styles.danger}>&#8595; 2%</span>
              &nbsp;this month
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.icon_wrap} ${styles.sales}`}>
            <i className={styles.sales}></i>
          </div>
          <div className={styles.card_body}>
            <p className={styles.title}>Sales</p>
            <h4 className={styles.price}>$89K</h4>
            <p className={styles.dicription}>
              <span className={styles.lavel}>↑ 11%</span>
              &nbsp;this month
            </p>
          </div>
        </div>
      </div>

      <div className={styles.chart_wrapper}>
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default HomePage;
