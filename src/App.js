import logo from './ufma_logo.png'
import './App.css';
import CreateGrade from './Components/Grades/CreateGrades/CreateGrades';
import OtherGrades from './Components/Grades/OtherGrades/OtherGrades';
import Button from './Components/Button/Button'
import CreateSubject from './Components/Subject/CreateSubject';
import CreateProgressBar from './Components/ProgressBar/ProgressBar';
import CreateHeader from './Components/Header/Header'
import CreateFooter from './Components/Footer/Footer'
import Result from './Components/ShowResults/Result/Result'
import ResultTitle from './Components/ShowResults/ResultTitle/ResultTitle'
import GradeValue from './Components/ShowResults/GradeResult/GradeValue/GradeValue'
import GradePhrase from './Components/ShowResults/GradeResult/GradePhrase/GradePhrase';
import GradeResult from './Components/ShowResults/GradeResult/GradeResult'
import ShowResults from './Components/ShowResults/ShowResults';

function App() {
  return (
    <>
        <CreateHeader logo = {logo}/>

        <div className="App-main">
          <div className="get-datas">
            <form method="get">

              <div className="form-itens">
                <CreateSubject/>
              </div>

              <div className="form-itens">
                <div className="grades">
                  <CreateGrade index="1"/>
                  <CreateGrade index="2"/>
                  <CreateGrade index="3"/>
                </div>
              </div>

              <div className="form-itens">
                <OtherGrades name="Reposição" option="1" index='Replacement-test'/>
              </div>
              
              <div className="form-itens">
                <OtherGrades name="Prova Final" option="2" index='Final-test'/> 
              </div>

              <div className="form-itens">
                <Button name="Calcular"/>
              </div>

            </form>
          </div>

          <ShowResults>
            <Result>
                <ResultTitle/>

                <GradeResult>
                  <GradePhrase/>
                  <GradeValue/>
                </GradeResult>

                <CreateProgressBar/>

              </Result>
          </ShowResults>
          
        </div> 

        <CreateFooter/>

    </>

  );

}




export default App;
