let subject;
let grades = [];
let average = 0, final_average = 0;
let hasReplacemetTest = false;
let hasFinalTest = false;

window.onload = () => {

    let button = document.getElementById('Btt');

    validateSubject();
    for(let i = 1; i <=3; i++){
        validateGrade(i);
    }

    verifyChecked();


    button.addEventListener('click', (event)=>{
        event.preventDefault();

        subject = getSubject();
        grades = getGrades();
        average = computeAverage(grades);

        if(hasReplacemetTest) average = computeReplacement(grades);
        if(hasFinalTest) final_average = computeFinalTest(average);
        else final_average = average;

        computeBarProgess(final_average, hasFinalTest);

        let message = setMessage(final_average, hasReplacemetTest, hasFinalTest);

        document.getElementById('grade-phrase').innerHTML = (`${message} em ${subject}`);
        document.getElementById('grade-value').innerHTML = final_average.toFixed(1);
    });

}


function getSubject(){
    let subject = document.getElementById('subject').value;
    return subject;
}

function getGrade(index){
    let currentGrade = parseFloat(document.getElementById(index).value);
    if(isNaN(currentGrade)) return -1;
    else if(currentGrade < 0 || currentGrade > 10) return -1;
    else return currentGrade;
}

function getGrades(){
    let gradeValues = [];
    for(let i = 1; i <= 3; i++){
        gradeValues[(i-1)] = getGrade(i);
    }
    return gradeValues;
}

function computeAverage(grades){
    let average = 0;

    for(let i = 0; i < 3; i++){
        average += grades[i];
    }

    return (average/3);
}

function computeReplacement(grades){
    let replacementGrade = getGrade('Replacement-test');
    grades.sort((a, b) => a-b);
    grades[0] = (replacementGrade > grades[0]) ? replacementGrade : grades[0];

    return computeAverage(grades);
}

function computeFinalTest(average){
    let finalGrade = getGrade('Final-test');
    let finalAverage = (average + finalGrade) /2 ;
    
    return finalAverage;
}

function computeBarProgess(average, hasFinalTest){
    let progressColor = '';
    let progressPercentage = (average/10);

    const progressBar = document.getElementById('loader');

    alert("progress percentage: " + progressPercentage);


    if( ((progressPercentage < 0.6) && hasFinalTest) || ((progressPercentage < 0.7))){
        alert('hi');
        progressColor = 'rgb(255,0,0)';
    }
    else if(  ((progressPercentage >= 0.6 && progressPercentage <=0.8 ) && hasFinalTest) || ((progressPercentage >= 0.7 && progressPercentage <= 0.8) && !hasFinalTest) ){
        progressColor = 'rgb(255,255,0)';
    }
    else{
        progressColor = 'rgb(0,255,0)';
    }

    progressBar.style.width = `${progressPercentage*100}%`;
    progressBar.style.backgroundColor = progressColor;

}

function setMessage(average, hasReplacemetTest, hasFinalTest){
    let message;
    if(average > 6){
        if(hasFinalTest) message = "Aprovado por prova final";
        else if(average > 7){
            if(hasReplacemetTest) message = "Aprovado com reposição";
            else message = "Aprovado direto";
        }
        else{
            message = "Reprovado";
        }
    }
    
    return message;
}


function validateSubject(){
    let subjectBox = document.getElementById('subject');
    subjectBox.addEventListener('focusout', () => {
        let subject = document.getElementById('subject').value;
        if(subject == ""){
            subjectBox.style.borderColor = 'red';
        }
        else{
            subjectBox.style.borderColor = 'green';
        }
    });

}

function validateGrade(index){
    let gradeBox;
    let border_color;
    gradeBox = document.getElementById(index);
    gradeBox.addEventListener('focusout', () => {
        border_color = (getGrade(index) < 0) ? 'red' : 'green';
        gradeBox.style.borderColor = border_color;
    });
}

function verifyChecked(){
    for(let i = 1; i <= 2; i++){
        let radioName = `input[name="${i}"]`;
        let radios = document.querySelectorAll(radioName);

        radios.forEach((radio,index) => {
            radio.addEventListener('change', ()=>{
                if(i == 1) {
                    hasReplacemetTest = (index == 0);
                    if(hasReplacemetTest) validateGrade('Replacement-test');
                }
                else {
                    hasFinalTest = (index == 0);
                    if(hasFinalTest) validateGrade('Final-test');
                }
            })
        })
    }
}
