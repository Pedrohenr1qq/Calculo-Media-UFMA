import './CreateGrades.css'

function CreateGrade({index}){
    return(
      <div className = "grade">
        <label htmlFor={index} >Nota: {index}:</label><br/>
        <input type="text" id={index}/>
      </div>
    );
  }

export default CreateGrade;