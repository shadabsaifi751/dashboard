import React, { useState } from 'react';
import Chip from './Chip';
import styles from "./form.module.scss";
import InputField from './InputField';

const ChipInput = () => {
  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      setChips([...chips, inputText.trim()]);
      setInputText('');
    }
  };

  const handleChipDelete = (chipIndex) => {
    setChips(chips.filter((_, index) => index !== chipIndex));
  };

  return (
    <div className={styles.chip_wrapper}>
      <label className={styles.label}>Skills</label>
      <div className={styles.chip_input}>
        <div className={styles.chip_container}>
          {chips.map((chip, index) => (
            <Chip
              key={index}
              text={chip}
              onDelete={() => handleChipDelete(index)}
            />
          ))}
        </div>
        <InputField
          type="text"
          placeholder="Enter text and press Enter..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          ParentWrapperClassName={styles.inputChip}
          className="mb-0"
        />
      </div>
    </div>
  );
};

export default ChipInput;
