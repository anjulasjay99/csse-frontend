import styles from '../CSS/offline.module.css';

function Offline(){
    return(
    <div className={styles.wrapper}>
        <h1>SLOW CONNECTION</h1>
        <h4>Please check your internet connection</h4>
    </div>
  
    )
}

export default Offline;