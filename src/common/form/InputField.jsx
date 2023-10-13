import React from 'react';
import styles from "./form.module.scss"

const InputField = ({ type, placeholder, value, onChange,label ,onKeyPress,className,ParentWrapperClassName}) => (
  <div className={`${styles.input_wrap} ${ParentWrapperClassName}`}>
    <label className={styles.label}>{label}</label>
    <input className={`${styles.form_control} ${className}`} onKeyPress={onKeyPress} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

export default InputField;
