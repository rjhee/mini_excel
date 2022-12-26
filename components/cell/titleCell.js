import React from 'react';
import styles from "./cell.module.css";

const TitleCell = () => {
    return (
        <div className={styles.titleCell}>
            <input type="text" onClick={null}/>
        </div>
    );
};

export default TitleCell;