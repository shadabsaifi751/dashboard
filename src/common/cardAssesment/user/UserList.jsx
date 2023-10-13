import React from 'react';
import styles from "./userList.module.scss"

const UserList = ({List}) => {

    let displayText = [];  // default data list
    let remainingCount = 0;  // user count state

    // for attend user data total count 
    if (List.length > 3) {
        displayText = List.slice(0, 3);
        remainingCount = List.length - 3;
    } else {
        //total uselist data 
        displayText = List;
    }

    return (
        <ul className={styles.userList_wrap}>
            {
                displayText && displayText.map((item, key) => (
                    <li className={styles.user_item} key={key}>{item.name}</li>
                ))
            }
            {
                remainingCount > 0 && <span className={styles.total_count}>+{remainingCount}</span>
            }
        </ul>
    )
}

export default UserList