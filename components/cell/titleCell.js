import React from 'react';
import styles from "./cell.module.css";

const TitleCell = (props) => {
    const {r, c} = props;
    return (
        <div className={styles.titleCell}>
            <input type="text" onClick={()=>{
               c !== null && console.log('제목 셀 위치',c?.toUpperCase())
               r !== null &&  console.log('제목 셀 위치',r);
            }}/>
        </div>
    );
};

export default TitleCell;
