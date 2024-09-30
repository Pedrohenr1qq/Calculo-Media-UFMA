// importando estilização
import './App.css';

// importando imagens
import logo from './images/ufma_logo.png'

//importando componentes
import CreateHeader from './Components/Header/Header'
import Section from './Components/Section/Section';
import Form from './Components/Form/Form/Form';
import Button from './Components/Button/Button'
import Result from './Components/ShowResults/Result/Result'
import SubjectList from './Components/SubjectList/List/SubjectList';
import CreateFooter from './Components/Footer/Footer'

import CreateSubjectName from './Components/SubjectName/CreateSubjectName';

// importando funcionalidades react
import { useState} from 'react';

import { getSubjectName } from './Scripts/getMethods';

import { getSubjects, deleteSubject} from './Scripts/requestServer';

function App() {

  //Cria o array contendo as disciplinas e a sua função de atualização
  const [subjects, setSubjects] = useState([]);
  
  async function handleGetSubject(){
    const newSubjects = await getSubjects();
    newSubjects.map((subject) => console.log(subject));
    setSubjects(newSubjects); 
  }

  //Função para remover cadeiras matriculadas no banco de dados
  async function removeSubject(){
    const subjectName = getSubjectName('subject-name-remove');
    subjects.filter((subject) => subject.name === subjectName)
      .map((subject) => (
        deleteSubject(subject.id)
      ))

    await handleGetSubject();
    await handleGetSubject();

  }

  return (
    <>
        <CreateHeader logo = {logo}/>

        <div className="App-main">
          <div className= "Calculator">

            <Section name="get-datas">
              <Form funcButton={handleGetSubject}/>
            </Section>

            <Section name="show-results" height="150px">
                <Result/>
            </Section>
          </div>

          <div className= "remove-data">
            <Section name='list-Subject' height="550px" width="400px">
              <SubjectList subjectList={subjects}/> 
              
              <div className="remove-subject">
                <CreateSubjectName name="remove-input" idInput="subject-name-remove"/>
                <Button name="Remover" func={removeSubject}/>
              </div>
            </Section>
          </div>              
        </div>
         
        <CreateFooter/>
    </>
  );
}

export default App;
