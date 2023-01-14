import React from 'react';
import styles from './Buttons.module.css'

const Buttons = () => {
    return (
        <div className={styles.numbers}>
            <button className={styles.button}>7</button>
            <button className={styles.button}>8</button>
            <button className={styles.button}>9</button>
            <button className={styles.button}>4</button>
            <button className={styles.button}>5</button>
            <button className={styles.button}>6</button>
            <button className={styles.button}>1</button>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button>
            <button className={styles.button}>.</button>
            <button className={styles.button}>0</button>
            <button className={styles.button}>00</button>
        </div>
    );
};

export default Buttons;