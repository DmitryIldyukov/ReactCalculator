import React from 'react';
import styles from './Actions.module.css'

const Actions = () => {
    return (
        <div className={styles.actionsContainer}>
            <button className={styles.actionBtn}>/</button>
            <button className={styles.actionBtn}>*</button>
            <button className={styles.actionBtn}>-</button>
            <button className={styles.actionBtn}>+</button>
            <button className={styles.actionBtn}>=</button>
        </div>
    );
};

export default Actions;