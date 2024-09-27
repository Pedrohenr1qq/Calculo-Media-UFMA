import './SubjectList.css'
import SubjectItem from '../SubjectItem/SubjectItem';

const SubjectList = ({subjectList}) =>{
    return(
        <div className='container'>
            <h2>Disciplinas</h2>
            <div className='list'>
                <ul className = 'subject-list'>
                    {
                        subjectList.map((subject, index) => (
                            <SubjectItem subjectItem={subject} key={index}/>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
}

export default SubjectList;