
// Retorna o nome da disciplina
export function getSubjectName(id){
    let subject = document.getElementById(id).value;
    if(subject.trim() === "") subject= "indefinido";
    return subject;
} 


// Pega o valor da nota, de acordo com o id indicado. Além disso, faz algumas validações pra saber se o valor inserido está correto
/* Validações:
    - Deve ser um valor numérico, podendo ser inteirou ou decimal
    - Deve ser um valor entre 0 e 10 --> [0,10]
*/ 
export function getGrade(id){
    let currentGrade = parseFloat(document.getElementById(id).value);
    if(isNaN(currentGrade)) {
        document.getElementById(id).value = 0;
        return -1; 
    }
    else if(currentGrade < 0 || currentGrade > 10) {
        document.getElementById(id).value = 0;
        return -1;
    }
    else return currentGrade;
}

// Retorna um array com as 3 notas principais
export function getGrades(){
    let gradeValues = [];
    for(let i = 1; i <= 3; i++){
        gradeValues[(i-1)] = getGrade(i);
    }
    return gradeValues;
}

// Retorna o valor da média
export function getAverage(){
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
export function getStatus (){
    let status = document.getElementById('grade-phrase').innerHTML;
    if(status.trim() === "") status= "indefinido";
    return status;
}

export function getIsChecked(id){
    let radioName = `input[name="${id}"]`;
    let radios = document.querySelectorAll(radioName);
    radios.forEach((radio, index) => {
        if(index === 0) return(radio.checked);
    })
}

