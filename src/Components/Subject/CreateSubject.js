import './CreateSubject.css'

function CreateSubject(){
    return(
        <div className="subject">
            <label htmlFor="subject">Disciplina:</label><br/>
            <input type="text" id="subject"/>
        </div>
    );
}

export default CreateSubject;