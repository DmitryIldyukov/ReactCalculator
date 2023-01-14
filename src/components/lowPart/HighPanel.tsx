import React from 'react';
import styles from './HighPanel.module.css';

const HighPanel = () => {
    return (
        <div className={styles.highPanelContainer}>
            <button className={styles.highBtn}>AC</button>
            <button className={styles.highBtn}>+/-</button>
            <button className={styles.highBtn}>%</button>
        </div>
    );
};

export default HighPanel;