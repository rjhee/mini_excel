import React from 'react';
import styles from './cell.module.css';

const Cell = (props) => {
    const {r, c} = props;
    return (
        <div className={styles.cell}>
            <input
                type="text"
                   onClick={()=>{
                console.log('cell.js:셀 위치',c?.toUpperCase() + r);

            }}/>
        </div>
    );
};

export default Cell;
