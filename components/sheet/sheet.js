import React, {useEffect, useState} from 'react';

import AddButton from "../button/addButton";
import styles from './sheet.module.css';
import Cell from "../cell/cell";
import TitleCell from "../cell/titleCell";

const Sheet = () => {
    const AZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const [tr, setTr] = useState([]);
    const [titleColumn, setTitleColumn] = useState([]);
    const [titleRow, setTitleRow] = useState([]);
    // const [tr, setTr] = useState([[<Cell c={AZ[0]} r={1} />,<Cell c={AZ[1]} r={1} />], [<Cell c={AZ[0]} r={2} />,<Cell c={AZ[1]} r={2} />]]);
    const [rIndex, setRIndex] = useState(1);
    const [cIndex, setCIndex] = useState(2);

    function addRow() {
        let copy = [...tr];
        let lastTr = copy[copy.length-1];
        setRIndex(rIndex+1);
        copy.push(lastTr);
        setTr(copy);
    }

    function addColumn() {
        let copy = [...tr];
        let copyTitle = [...titleColumn];
        setCIndex(cIndex+1);
        copy[0].push(<Cell c={AZ[cIndex]} r={rIndex} />);
        copyTitle.push(<TitleCell/>);
        setTr(copy);
        setTitleColumn(copyTitle)
    }

    function makeDefaultCell() {
        let trArr = [];
        let titleColumnArr = [];
        let titleRowArr = [];
        let arr = [];
        for (let i = 0; i < 2; i++) {
            for(let j = 0; j < 1; j++){
                arr.push(<Cell c={AZ[i]} r={i+1} />)
            }
            titleColumnArr.push(<TitleCell/>);
            trArr.push(arr);
        }
        titleRowArr.push(<TitleCell/>);
        setTitleColumn(titleColumnArr);
        setTitleRow(titleRowArr);
        setTr(trArr);
    }

    useEffect(()=> {
            makeDefaultCell();
        },[])


    return (
        <div className={styles.rowCover}>

            <div className={styles.row}>
                <div className={styles.titleRow}>
                    <TitleCell/>
                    {titleColumn}
                </div>
                {tr.map((items)=>

                    <tr className={styles.tr}>
                        {titleRow}
                        {items.map((item)=>
                            <td className={styles.td}>{item}</td>
                            )}
                    </tr>
                )}
            </div>
            <div className={styles.addColBtn}>
                <AddButton onClick={addColumn}/>
            </div>
            <div className={styles.addRowBtn}>
                <AddButton onClick={addRow}/>
            </div>
        </div>
    );
};

export default Sheet;