import styles from './Evento.module.css'

function Evento(){
    
    function meuEvento(){
        alert("Parabéns, você criou uma função!");
    }

    return(
        <>
        <p>Clique aqui para disparar um evento.</p>
        <button className={styles.botaoClique} onClick={meuEvento} >Clique no botão</button>
        </>
    );
}

export default Evento