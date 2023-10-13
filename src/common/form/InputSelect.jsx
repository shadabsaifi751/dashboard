import React from 'react';
import styles from "./form.module.scss"

const InputSelect = ({ label, options, value, onChange }) => {

    // console.log(options,"selectData")
    return (
        <div className={styles.select_wrap}>
            <label className={styles.label}>{label}</label>
            <select className={styles.form_select} value={value} onChange={onChange}>
                {options.map((option, key) => (
                    <option key={key} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default InputSelect;
