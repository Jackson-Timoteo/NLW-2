import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css'


function TeacherForm(){
    return  (
        <div id="page-teacher-form" className="container">
    <PageHeader 
        title="Que incrivel que você quer dar aulas!" 
        
        description="O primeiro passo é preencher esse formulário de inscrição"
    />

        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input name="name"  label="Nome conpleto" />
                <Input name="avatar"  label="Avatar" />
                <Input name="whatsapp"  label="whatsapp" />


            
            </fieldset>
        </main>
    </div>
    )
}

export default TeacherForm;