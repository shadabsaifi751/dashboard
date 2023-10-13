import React from 'react';
import styles from "./cardAssesment.module.scss"
import UserList from './user/UserList';

export const CardAssesment = ({ Item }) => {

    return (
        <div className={styles.card_assesment_wraper}>
            <div className={styles.card_body}>
                <div className={styles.body}>
                    <i className={styles.icon_assessment}></i>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{Item.title ? Item.title : "Math Assessment"}</h3>
                        <h4 className={styles.subTitle}>{Item.subTitle} <span className={styles.calendar}><i className={styles.icon_calendar}></i>{Item.date}</span></h4>
                    </div>
                </div>
                <button type="button" className={styles.button_dots}><i className={styles.icon_dots}></i></button>
            </div>
            <div className={styles.card_footer}>
                <div className={styles.duration_wrap}>
                    <div>
                        <time className={styles.duration_time}>{Item.durationTime}</time> <br />
                        <p className={styles.duration_title}>Duration</p>
                    </div>
                    <div>
                        <time className={styles.duration_time}>{Item.totalQuestion}</time> <br />
                        <p className={styles.duration_title}>Questions</p>
                    </div>
                </div>
                <div className={styles.userList_wrap}>
                    <button type="button" className={styles.share_button}><i className={styles.icon_atteched}></i>Share</button>
                    <UserList List={Item.userList}/>
                </div>
            </div>
        </div>
    )
}
