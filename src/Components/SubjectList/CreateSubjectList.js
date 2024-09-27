import Section from "../Section/Section";
import SubjectList from "./List/SubjectList";


function CreateSubjectList(subjects){
    return(
        <div className='Subject-list'>
        <Section height="550x" width="400px">
          <SubjectList subjectsList={subjects}/>
        </Section>
      </div>
    );
}

export default CreateSubjectList;