import React from 'react';
import styles from './cell.module.css';

const Cell = (props) => {
    const {r, c} = props;
    return (
        <div className={styles.cell}>
            <input type="text" onClick={null}/>
        </div>
    );
};

export default Cell;