import React from 'react';
import HighPanel from "./HighPanel";
import Buttons from "./Buttons";
import Actions from "./Actions";
import styles from './LowPart.module.css';

const LowPart = () => {
    return (
        <div className={styles.lowPartContainer}>
            <div className={styles.lowPartLeftContainer}>
                <HighPanel />
                <Buttons />
            </div>
            <Actions />
        </div>
    );
};

export default LowPart;