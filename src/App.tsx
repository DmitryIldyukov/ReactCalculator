import React from 'react';
import styles from './App.module.css';
import LowPart from "./components/lowPart/LowPart";

function App() {
    return (
        <div className="App">
            <div className={styles.displayActions}>

            </div>
            <div className={styles.calcPanel}>
                <LowPart />
            </div>
        </div>
    );
}

export default App;
