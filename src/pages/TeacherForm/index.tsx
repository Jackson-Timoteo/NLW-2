import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm(){
    return  (
        <div id="page-teacher-form" className="container">
    <PageHeader 
        title="Que incrivel que você quer dar aulas!" 
        
        description="O primeiro passo é preencher esse formulário de inscrição"
    />

        <main>
            <fieldset>
                <legend>Seus Dados.</legend>
                <Input name="name"  label="Nome conpleto" />
                <Input name="avatar"  label="Avatar" />
                <Input name="whatsapp"  label="whatsapp" />
            </fieldset>

            <fieldset>
                <legend>Sonre a Aula.</legend>
                <Input name="subject"  label="Matéria" />
                <Input name="cost"  label="Custo da sua hora por Aula" />
                <Input name="whatsapp"  label="whatsapp" />
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso Importante"/>
                    Impartante! <br />
                    Preencha todos os dados.
                </p>
                
                <button>
                    Salvar Cadastro
                </button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;