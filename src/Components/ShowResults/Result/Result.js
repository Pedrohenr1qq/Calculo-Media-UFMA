import './Result.css'

function Result(props){
    return(
        <div className="results">{props.children}</div>
    );
}

export default Result;