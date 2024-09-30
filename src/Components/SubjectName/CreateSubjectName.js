import './CreateSubjectName.css'

function CreateSubjectName({name, idInput}){
    return(
        <div className={name}>
            <label htmlFor="subject">Disciplina:</label><br/>
            <input type="text" id={idInput}/>
        </div>
    );
}

export default CreateSubjectName;