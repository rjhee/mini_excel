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
    const [rIndex, setRIndex] = useState(2);
    const [cIndex, setCIndex] = useState(2);

    function addRow() {
        let copy = [...tr];
        let copyTitle = [...titleRow];
        let lastTr = copy[copy.length-1];
        setRIndex(rIndex+1);
        let arr = [];
        for(let i = 0; i < lastTr.length; i++){
            arr.push(<Cell key={rIndex} c={AZ[i]} r={rIndex+1} />)
        }
        copyTitle.push(<TitleCell key={rIndex} c={null} r={rIndex+1}/>);
        copy.push(arr);
        setTitleRow(copyTitle);
        setTr(copy);
    }

    function addColumn() {
        let copy = [...tr];
        let copyTitle = [...titleColumn];
        let empty = [];
        setCIndex(cIndex+1);
        for(let i = 0; i < copy.length; i++){
            let copy_ = [...copy[i]];
            copy_.push(<Cell c={AZ[cIndex]} r={i+1} />);
            empty.push(copy_);
        }
        setTr(empty);
        console.log('sheet.js:41 ->',copy);
        copyTitle.push(<TitleCell key={cIndex} c={AZ[cIndex]} r={null}/>);
        setTitleColumn(copyTitle)
    }

    function makeDefaultCell() {
        let titleColumnArr = [];
        let titleRowArr = [];
        let arr = [];
        let num = 0;
        for (let i = 0; i < 2; i++) {
            arr.push([
                <Cell c={AZ[num]} r={i+1} />,
                <Cell c={AZ[num+1]} r={i+1} />
            ])
            titleColumnArr.push(<TitleCell key={i} c={AZ[i]} r={null}/>);
            titleRowArr.push(<TitleCell key={i} c={null} r={i+1}/>);
        }
        setTitleColumn(titleColumnArr);
        setTitleRow(titleRowArr);
        setTr(arr);
    }

    useEffect(()=> {
            makeDefaultCell();
        console.log('sheet.js:71 ->',tr);
        },[])


    return (
        <div className={styles.rowCover}>

            <div className={styles.row}>
                <div className={styles.titleRow}>
                    <TitleCell/>
                    {titleColumn}
                </div>
                <div className={styles.titleRowCover}>
                    <div className={styles.tr}>{titleRow}</div>
                    <tbody>
                        {tr.map((items, i)=>
                            <tr key={i} className={styles.tr}>
                                {items.map((item, j)=>
                                    <td key={j} className={styles.td}>{item}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </div>
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
