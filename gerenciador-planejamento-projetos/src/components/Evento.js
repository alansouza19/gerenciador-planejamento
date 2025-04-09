import styles from './Evento.module.css'
import Button from './evento/Button'

function Evento(){
    
    function meuEvento(){
        alert("Parabéns, você chamou um evento!");
    }

    function segundoEvento(){
        alert("Ativando segundo evento!");
    }

    return(
        <>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={segundoEvento} text="Segundo evento"/>
        <p>Clique aqui para disparar um evento.</p>
        <button className={styles.botaoClique} onClick={meuEvento} >Clique no botão</button>
        </>
    );
}

export default Evento