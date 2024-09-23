import './Button.css'

function Button(props){
    return(
        <div className="div-btt">
            <button id="Btt">{props.name}</button>
        </div>
    );
}

export default Button;