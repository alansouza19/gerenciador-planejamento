function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log("User cadastrado")
    }

    return(
        <div>
            <h1>Faça seu cadastro aqui</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome completo"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Form