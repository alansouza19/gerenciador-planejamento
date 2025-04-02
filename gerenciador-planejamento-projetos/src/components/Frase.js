import styles from './Frase.module.css'

function Frase(){

    return(
      <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Testando CSS</p>
      </div>
    );
}

export default Frase