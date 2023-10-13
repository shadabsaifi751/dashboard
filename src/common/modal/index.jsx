import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from "./modal.module.scss"

const Modals = ({ isOpen, onClose, children, title }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const Submit = () => {
    onClose()
  }

  return ReactDOM.createPortal(
    <div className={`${styles.popup_overlay}`} >
      <div ref={popupRef} className={`${styles.popup_content}`}>

        <div className={styles.modal_header}>
          <h4 className={styles.head_title}>{title ? title : "Create new assessment"}</h4>
          <button className={styles.close_button} onClick={onClose}><i className={styles.icon_close}></i></button>
        </div>
        <div className={styles.modal_body}>
          {children}
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.save_button} onClick={Submit}>Save</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modals;
