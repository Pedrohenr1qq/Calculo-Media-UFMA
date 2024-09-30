import './Button.css'

function Button({name, func, type}){
    return(
        <div className="div-btt">
            <button type={type} id="Btt" onClick={async (event)=>{
                event.preventDefault();
                await func();
            }}
            >{name}</button>
        </div>
    );
}

export default Button;