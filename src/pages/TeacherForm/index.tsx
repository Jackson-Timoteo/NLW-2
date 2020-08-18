import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
                <Textarea name="bio" label="Biografia" />
            </fieldset>

            <fieldset>
                <legend>Sobre a Aula.</legend>
                
                <Select 
                    name="subject" 
                    label="Matéria"  
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Ciências', label: 'Ciências'},
                        { value: 'Eduação Física', label: 'Eduação Física'},
                        { value: 'Manutenção de Computadores e Notebooks', label: 'Manutenção de Computadores e Notebooks'},
                        { value: 'Programação', label: 'Programação'},
                        { value: 'Matématica', label: 'Matématica'},
                        { value: 'Português', label: 'Português'},
                        { value: 'História', label: 'História'},
                    ]}
                />
                
                <Input name="cost"  label="Custo da sua hora por Aula" />
                    
            </fieldset>
            
            <fieldset>
                <legend>
                    Horários disponiveis
                    <button type="button">
                        + Novo horário
                     </button>
                </legend>

                <div className="schedule-item">
                    <Select 
                        name="subject" 
                        label="Matéria"  
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Eduação Física', label: 'Eduação Física'},
                            { value: 'Manutenção de Computadores e Notebooks', label: 'Manutenção de Computadores e Notebooks'},
                            { value: 'Programação', label: 'Programação'},
                            { value: 'Matématica', label: 'Matématica'},
                            { value: 'Português', label: 'Português'},
                            { value: 'História', label: 'História'},
                        ]}
                    />
                    <Input name="from" label="Das" type="time" />
                    <Input name="from" label="Até" type="time" />
                </div>
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso Importante"/>
                    Impartante! <br />
                    Preencha todos os dados.
                </p>
                
                <button type="button">
                    Salvar Cadastro
                </button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;