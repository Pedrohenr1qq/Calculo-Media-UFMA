import './OtherGrades.css'
import Grade from '../../InputGrade/InputGrade';

function OtherGrades({name, option, index}){
    let radioYes = `yes-${option}`;
    let radioNo = `no-${option}`;
    return (
        <div className="other-grades">
            <label className="label-other-grades">{name}:</label>
            <input type="radio" name={option} id= {radioYes}/>
            <label htmlFor={radioYes} >Sim</label>
            <input type="radio" name={option} id= {radioNo}/>
            <label htmlFor= {radioNo} className="last-one-label">Não</label>

            <Grade type="text" index={index} id="grade" />
        </div>
    );
}

export default OtherGrades;