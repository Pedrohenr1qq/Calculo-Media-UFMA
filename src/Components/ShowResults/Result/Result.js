import './Result.css'

import ResultTitle from '../ResultTitle/ResultTitle';
import GradeResult from '../GradeResult/GradeResult';
import GradePhrase from '../GradeResult/GradePhrase/GradePhrase';
import GradeValue from '../GradeResult/GradeValue/GradeValue';
import CreateProgressBar from '../ProgressBar/ProgressBar';

function Result(props){
    return(
        <div className="results">
            <ResultTitle/>

            <GradeResult>
                <GradePhrase/>
                <GradeValue/>
            </GradeResult>

            <CreateProgressBar/>
        </div>
    );
}

export default Result;