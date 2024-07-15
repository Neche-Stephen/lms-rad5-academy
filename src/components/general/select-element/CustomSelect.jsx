import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CustomSelect = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <div className={styles.selectSelected} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <span className={styles.arrowDown}><FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} /></span>
      </div>
      {isOpen && (
        <div className={styles.selectItems}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
