import React, {useState} from 'react';
import Tr from "./tr";
import AddButton from "../button/addButton";
import styles from './tr.module.css';
const Rows = () => {
    const [row, setRow] = useState([<Tr/>]);

    function onClick() {
        const rowCopy = [...row];
        rowCopy.push(<Tr/>);
        setRow(rowCopy)
    }
    return (
        <div className={styles.rowCover}>
            <div>
                {row}
            </div>
            <AddButton onClick={onClick}/>
        </div>
    );
};

export default Rows;