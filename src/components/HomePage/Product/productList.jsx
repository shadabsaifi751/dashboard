import React from "react";
import styles from "./productList.module.scss";
import data from "../../../utils/product.json";
const ProductList = () => {
  return (
    <div className={styles.ProductList_wrapper}>
      <div className={styles.product_head}>
        <h3 className={styles.title}>Product Sale</h3>

        <div className={styles.product_filter}>
          <div className={styles.search_input}>
            <i className={styles.search_icon}></i>
            <input
              type="text"
              placeholder="Search..."
              className={styles.form_control}
            />
          </div>
          <div className={styles.search_input}>
            <select id="selectBox" className={styles.form_Select_control}>
              <option value="select">* select</option>
              <option value="Last 10 Days">Last 10 Days</option>
              <option value="Last 20 Days">Last 20 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
            <i className={styles.arrow_down}></i>
          </div>
        </div>
      </div>

      <table width="100%" className={styles.product_list_table}>
        <thead className={styles.table_head}>
          <tr className={styles.table_row}>
            <td width="55%" className={styles.table_data}>
              Product Name
            </td>
            <td width="15%" className={styles.table_data}>
              Stoke
            </td>
            <td width="15%" className={styles.table_data}>
              Price
            </td>
            <td width="15%" className={styles.table_data}>
              Total Sales
            </td>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {data.products.map((item, index) => (
            <tr key={index} className={styles.table_body_row}>
              <td className={styles.body_head}>
                <div className={styles.product_body}>
                  <img
                    src={item.url}
                    alt="product image"
                    className={styles.product_image}
                  />
                  <div className={styles.product_content}>
                    <h4 className={styles.title}>{item.title}</h4>
                    <p className={styles.subTitle}>{item.description}</p>
                  </div>
                </div>
              </td>
              <td className={styles.product_stoke}>{item.stoke} in stoke</td>
              <td className={styles.product_price}>$ {item.price}</td>
              <td className={styles.product_totalSale}>{item.totalSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
