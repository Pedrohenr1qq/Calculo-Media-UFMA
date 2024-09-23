import './GradeResult.css'

function GradeResult(props){
    return(
        <div className='grade-result'>{props.children}</div>
    )
}

export default GradeResult;