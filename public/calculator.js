//Variáveis principais
let subject = "";    
let grades = [];    
let average = 0, final_average = 0; 
let hasReplacemetTest = false;  
let hasFinalTest = false;      

window.onload = () => {
    //Valida se os valores inseridos (ou a falta deles) nos campos de entrada
    validateSubject();
    for(let i = 1; i <=3; i++){
        validateGrade(i);
    }

    //Verifica se os campos de entrada do tipo "radio" foram marcados. Por padrão, o valor é false;
    verifyChecked();

    const button = document.getElementById('Btt');

    //Realiza o calculo após o botão "Calcular" for clicado
    button.addEventListener('click', (event)=>{
        event.preventDefault(); //Inibe o botão de atualizar a página

        //Pega os dados recebidos pelo Usuário
        subject = getSubject();
        grades = getGrades();
        average = computeAverage(grades);

        //Verifica se o aluno fez prova de reposição e/ou prova final
        if(hasReplacemetTest) average = computeReplacement(grades);
        if(hasFinalTest) final_average = computeFinalTest(average);
        else final_average = average;

        if(subject == "") final_average = -5;

        //Se os dados estiverem errados, o valor de "final_average" é negativo. Caso seja negativo, mostra que tem algo errado. Mostra o resultado normalmente
        if(final_average > 0){
            computeBarProgess(final_average, hasFinalTest);

            let message = setMessage(final_average, hasReplacemetTest, hasFinalTest);
            
            document.getElementById('grade-phrase').innerHTML = (`${message} em ${subject}`);
            document.getElementById('grade-value').innerHTML = final_average.toFixed(1);
        }
        else if(final_average = -5){
            document.getElementById('grade-phrase').innerHTML = "Ops! Você esqueceu o nome da disciplina!";

        }

        else{
            document.getElementById('grade-phrase').innerHTML = "Ops! Você colocou alguma coisa errada!";
        }
    });

}

// Retorna o nome da disciplina
function getSubject(){
    let subject = document.getElementById('subject').value;
    return subject;
}

// Pega o valor da nota, de acordo com o id indicado. Além disso, faz algumas validações pra saber se o valor inserido está correto
/* Validações:
    - Deve ser um valor numérico, podendo ser inteirou ou decimal
    - Deve ser um valor entre 0 e 10 --> [0,10]
*/ 
function getGrade(id){
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
function getGrades(){
    let gradeValues = [];
    for(let i = 1; i <= 3; i++){
        gradeValues[(i-1)] = getGrade(i);
    }
    return gradeValues;
}

// Calcula a media das notas de "grades" e retorna esse valor
function computeAverage(grades){
    let average = 0;

    for(let i = 0; i < 3; i++){
        average += grades[i];
    }

    return (average/3);
}

// Se a nota de reposição for maior que a menor nota do aluno, faz a substituição e retorna uma nova média das notas atualizadas 
// Para fazer a substituição, é feito um "sort" em "grades", para que as notas fiquem em ordem crescente
// A menor nota é a primeira, então é feita a verificação se essa nota é menor que a nota de reposição
// Caso sim, substitui a nota 
function computeReplacement(grades){
    let replacementGrade = getGrade('Replacement-test');
    grades.sort((a, b) => a-b);
    grades[0] = (replacementGrade > grades[0]) ? replacementGrade : grades[0];

    return computeAverage(grades);
}

// Calcula a nova média com base na média anterior e no valor da nota final. Retorna esse valor
function computeFinalTest(average){
    let finalGrade = getGrade('Final-test');
    let finalAverage = (average + finalGrade) /2 ;
    
    return finalAverage;
}

// Calcula o tamanho e a cor da barra de progresso com base na média do aluno
function computeBarProgess(average, hasFinalTest){
    let progressColor = '';
    let progressPercentage = (average/10);

    const progressBar = document.getElementById('loader');

    if( ((progressPercentage < 0.6) && hasFinalTest) || ((progressPercentage < 0.7))){
        progressColor = 'rgb(255,0,0)'; //Em caso de reprovação --> Vermelho
    }
    else if(  ((progressPercentage >= 0.6 && progressPercentage <=0.8 ) && hasFinalTest) || ((progressPercentage >= 0.7 && progressPercentage <= 0.8) && !hasFinalTest) ){
        progressColor = 'rgb(255,255,0)'; // Em caso de aprovação, mas nota inferior ou igual a 8 --> Amarelo
    }
    else{
        progressColor = 'rgb(0,255,0)'; // Em caso de aprovação, com nota superior a 8 --> Verde
    }

    progressBar.style.width = `${progressPercentage*100}%`;
    progressBar.style.backgroundColor = progressColor;

}

// Retorna uma mensagem com base no valor da média (e se o aluno fez prova de reposição e/ou final) do aluno
function setMessage(average, hasReplacemetTest, hasFinalTest){
    let message = "Reprovado";
    if(average > 6){
        if(hasFinalTest) message = "Aprovado por prova final";
        else if(average > 7){
            if(hasReplacemetTest) message = "Aprovado com reposição";
            else message = "Aprovado direto";
        }
    }
    
    return message;
}

// Faz a verificação se foi adicionado um valor não nulo em "Disciplina" 
function validateSubject(){
    let subjectBox = document.getElementById('subject');
    subjectBox.addEventListener('focusout', () => {
        let subject = document.getElementById('subject').value;
        if(subject.trim() == ""){
            subjectBox.style.borderColor = 'red';
        }
        else{
            subjectBox.style.borderColor = 'green';
        }
    });

}

// Faz a verificação se a nota inserida é valida
function validateGrade(id){
    let gradeBox;
    let border_color;
    gradeBox = document.getElementById(id);
    gradeBox.addEventListener('focusout', () => {
        border_color = (getGrade(id) < 0) ? 'red' : 'green';
        gradeBox.style.borderColor = border_color;
    });
}

// Verifica se a entrada do tipo 'radio' foi clicada
/*
    Há dois campos que possuem 2 entrada do tipo 'radio':
        - Reposiçao
        - Prova Final
    
    Cada entrada tem um valor, baseado no seu index
        - Sim = 0
        - Não = 1

    Essa função define o valor de 'hasReplacementTest' e de 'hasFinalTest' com base no valor dos 'radios'
    Alem disso, é feita a validação dos valores inseridos nos campos de entrada de cada tipo (Reposição, Prova Final);

    
*/
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
