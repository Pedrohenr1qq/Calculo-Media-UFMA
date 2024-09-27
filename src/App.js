import logo from './ufma_logo.png'
import './App.css';

import Section from './Components/Section/Section';

import CreateGrade from './Components/Grades/CreateGrades/CreateGrades';
import OtherGrades from './Components/Grades/OtherGrades/OtherGrades';
import Button from './Components/Button/Button'
import CreateSubject from './Components/SubjectName/CreateSubject';
import CreateProgressBar from './Components/ProgressBar/ProgressBar';
import CreateHeader from './Components/Header/Header'
import CreateFooter from './Components/Footer/Footer'
import Result from './Components/ShowResults/Result/Result'
import ResultTitle from './Components/ShowResults/ResultTitle/ResultTitle'
import GradeValue from './Components/ShowResults/GradeResult/GradeValue/GradeValue'
import GradePhrase from './Components/ShowResults/GradeResult/GradePhrase/GradePhrase';
import GradeResult from './Components/ShowResults/GradeResult/GradeResult'

import SubjectList from './Components/SubjectList/List/SubjectList';

import { useState } from 'react';

//import CreateSubjectList from './Components/SubjectList/CreateSubjectList';


function App() {

  //Cria o array contendo as disciplinas e a sua função de atualização
  const [subjects, setSubjects] = useState([]);

  // Retorna o nome da disciplina
  function getSubject(){
    let subject = document.getElementById('subject').value;
    if(subject.trim() === "") subject= "indefinido";
    return subject;
  } 

  // Retorna o valor da média
  function getAverage(){
    let average = parseFloat(document.getElementById('grade-value').innerHTML);
    if(isNaN(average)) {
        average= -1; 
    }
    else if(average < 0 || average > 10) {
        average= -1;
    }
    return (average >= 0) ? average : 0;
  }

  //Retorna a mensagem de status
  function getStatus (){
    let status = document.getElementById('grade-phrase').innerHTML;
    if(status.trim() === "") status= "indefinido";
    return status;
  }

  // Cria as variaveis para armazenar o valor dos campos: Disciplina, Média e Status
  let [newSubjectName, setNewSubjectName] = useState("");
  let [newAverage, setNewAverage] = useState(0);
  let [newStatus, setNewStatus] = useState("");
  
  //Adiciona as novas disciplinas cadastradas e faz a re-renderização do array
  function addSubject(){
    setNewSubjectName(newSubjectName = getSubject());
    setNewAverage(newAverage = getAverage());
    setNewStatus(newStatus = getStatus());

    const newSubject = {
      name: newSubjectName,
      average: newAverage,
      status: newStatus
    };

    setSubjects([...subjects, newSubject]);
  }

  return (
    <>
        <CreateHeader logo = {logo}/>

        <div className="App-main">
          <div className= "Calculator">

            <Section name="get-datas">
              <form >
                <div className="form-itens">
                  <CreateSubject/>
                </div>

                <div className="form-itens">
                  <div className="grades">
                    <CreateGrade id="1"/>
                    <CreateGrade id="2"/>
                    <CreateGrade id="3"/>
                  </div>
                </div>

                <div className="form-itens">
                  <OtherGrades name="Reposição" option="1" index='Replacement-test'/>
                </div>

                <div className="form-itens">
                  <OtherGrades name="Prova Final" option="2" index='Final-test'/> 
                </div>

                <div className="form-itens">
                  <div className="div-btt">
                    <Button name="Calcular" func={()=>{
                      addSubject();
                    }}/>
                  </div>
                </div>

              </form>
            </Section>

            <Section name="show-results" height="150px">
                <Result>
                    <ResultTitle/>

                    <GradeResult>
                      <GradePhrase/>
                      <GradeValue/>
                    </GradeResult>

                    <CreateProgressBar/>

                  </Result>
            </Section>
          </div>

          <div className='Subject-list'>
            <Section height="550x" width="400px">
              <SubjectList subjectList={subjects} />
            </Section>
          </div>              
        </div>
         
        <CreateFooter/>

    </>

  );

}




export default App;
