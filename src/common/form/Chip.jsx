import React from 'react';
import styles from "./form.module.scss"

const Chip = ({ text, onDelete }) => {
  return <div className={styles.chip}>{text} <i className={styles.icon_close} onClick={onDelete}></i></div>;
};

export default Chip;
