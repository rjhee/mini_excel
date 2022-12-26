import React, {useEffect, useState} from 'react';
import styles from './cell.module.css';

const Cell = (props) => {
    const {r, c} = props;
    const [focus, setFocus] = useState(false);
    const focusStyle = {boxSizing:"border-box", border: '2px #20dad8 solid'};

    return (
        <div className={styles.cell} style={focus ? focusStyle : {}}>
            <input
                type="text"
                onFocus={()=>setFocus(true)}
                onFocusCapture={()=> setFocus(false)}
                onClick={()=>{
                    console.log('cell.js:셀 위치',c?.toUpperCase() + r);
            }}/>
        </div>
    );
};

export default Cell;
