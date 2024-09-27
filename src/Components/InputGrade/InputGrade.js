import './InputGrade.css'

const Grade = ({type, index}) => {
    return (
        <input className= "inputGrade" type= {type} id={index}/>
    );
}

export default Grade;
