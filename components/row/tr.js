import React, {useState} from 'react';
import Td from '../cell/td'
import AddButton from "../button/addButton";
import styles from './tr.module.css';

const Tr = (props) => {
    const [cell, setCell] = useState([<Td/>]);

    function onClick() {
        const cellCopy = [...cell];
        cellCopy.push(<Td/>);
        setCell(cellCopy)
    }

    return (
       <div className={styles.row}>
           <tr className={styles.tr}>
               {cell}
           </tr>
           <AddButton onClick={onClick}/>
       </div>
    );
};

export default Tr;