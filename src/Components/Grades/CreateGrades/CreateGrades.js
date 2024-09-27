import './CreateGrades.css'
import Grade from '../../InputGrade/InputGrade';

function CreateGrade({id}){
    return(
      <div className = "grade">
        <label htmlFor={id}>Nota {id}:</label> 
        <Grade type="text" index={id}/>
      </div>
    );
  }

export default CreateGrade;