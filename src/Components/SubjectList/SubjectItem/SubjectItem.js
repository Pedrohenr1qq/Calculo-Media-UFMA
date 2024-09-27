import './SubjectItem.css'

const SubjectItem = ({subjectItem}) => {
    
    return (
        <li className="subject-item">
            <span>Disciplina: {subjectItem.name}</span><br/>
            <span>Média: {subjectItem.average}</span><br/>
            <span>Status: {subjectItem.status}</span>
        </li>
        
    );
}

export default SubjectItem;