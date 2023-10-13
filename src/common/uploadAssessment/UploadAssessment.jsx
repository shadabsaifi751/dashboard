import React from 'react';
import styles from "./uploadAssessment.module.scss"

const UploadAssessment = ({onClick,...props}) => {
  return (
    <div className={styles.UploadAssessment} onClick={onClick}  {...props}>
      <div className={styles.icon_wrap}>
        <div className={styles.upload}>
          <i className={styles.icon_upload}></i>
        </div>
        <h5 className={styles.title}>New Assessment</h5>
      </div>
      <p className={styles.subtitle}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
    </div>
  )
}

export default UploadAssessment