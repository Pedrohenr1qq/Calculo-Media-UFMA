import "./Header.css"

function CreateHeader({logo}){
    return(
        <header className="App-header">
            <a href="/"><img src={logo} alt='Logo da UFMA'/></a>
            <div className="App-title">
            <h1>Calculadora de Média</h1>
            </div>
        </header>
    );
}

export default CreateHeader;