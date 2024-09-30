import './Form.css';

import FormItem from '../FormItem/FormItem';
import CreateSubjectName from '../../SubjectName/CreateSubjectName';
import CreateGrade from '../../Grades/CreateGrades/CreateGrades';
import OtherGrades from '../../Grades/OtherGrades/OtherGrades';
import Button from '../../Button/Button';

import { getSubjectName, getAverage, getStatus } from '../../../Scripts/getMethods';

import { addSubject } from '../../../Scripts/requestServer';

import { useState } from 'react';

const Form = ({method, funcButton}) =>{

    let [id, updateId] = useState(0);

    //Adiciona as novas disciplinas cadastradas e faz a re-renderização do array
    async function handleCreateButtonClick(){
        // Cria as variaveis para armazenar o valor dos campos: Disciplina, Média e Status
        const index = `id-${id}`;
        const newSubjectName = getSubjectName('subject');
        const newAverage = getAverage();
        const newStatus = getStatus();
    
        const newSubject = {
            id: index,
            name: newSubjectName,
            average: newAverage,
            status: newStatus
        };

        updateId(id=id+1);

        await addSubject(newSubject);
    }

    return(
        <form method={method}>
            <FormItem>
                <CreateSubjectName name="subject" idInput = "subject"/>
            </FormItem>

            <FormItem>
                <div className="grades">
                    <CreateGrade id="1"/>
                    <CreateGrade id="2"/>
                    <CreateGrade id="3"/>
                </div>
            </FormItem>

            <FormItem>
                <OtherGrades name="Reposição" option="1" index='Replacement-test'/>
            </FormItem>

            <FormItem>
                <OtherGrades name="Prova Final" option="2" index='Final-test'/> 
            </FormItem>

            <FormItem>
                <Button name="Calcular" func={async () => {
                    await handleCreateButtonClick();
                    funcButton();
                }}/>
            </FormItem>
        </form>   
    );
}

export default Form;