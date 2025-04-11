import {useState} from 'react'

function Condicional(){
   
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        
    }

    function limparEmail(){
        setUserEmail('');
    }


    return(
        <div>
            <h1>Cadastre seu e-mail!</h1>
            <form>
                <input 
                    type="email"
                    id='email' 
                    name='email' 
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}/>

                <button type="submit" onClick={enviarEmail}>Cadastrar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>            
        </div>
    );
}

export default Condicional