import './OtherGrades.css'

function OtherGrades({name, option, index}){
    let radioYes = `ỳes-${option}`;
    let radioNo = `no-${option}`;
    return (
        <div className="other-grades">
            <label className="label-other-grades">{name}:</label>
            <input type="radio" name={option} id= {radioYes}/>
            <label htmlFor={radioYes} >Sim</label>
            <input type="radio" name={option} id= {radioNo}/>
            <label htmlFor= {radioNo} >Não</label>

            <input type="text" id={index} className="input-other-grades"/>
        </div>
    );
}

export default OtherGrades;