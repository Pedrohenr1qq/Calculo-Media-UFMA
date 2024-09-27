import './Button.css'

function Button({name, func, type}){
    return(
            <button className="button"  type={type} id="Btt" onClick={(event)=>{
                event.preventDefault();
                func();
            }}
            >{name}</button>

    );
}

export default Button;