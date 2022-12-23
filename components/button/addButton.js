import React from 'react';
import styles from './button.module.css'

const AddButton = (props) => {
    const {onClick} = props;
    return (
        <button className={styles.addBtn} type='button' onClick={onClick}>
            +
        </button>
    );
};

export default AddButton;