import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm(){
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setSecheduleItems] = useState ([
        {  week_day: 0, from: '', to: '' }
    ]);

function addNewScheduleItem () {
    setSecheduleItems([
        ...scheduleItems,
        {  week_day: 0, from: '', to: '' }
    ]);
}

function handleCreateClass(){

}

    return  (
        <div id="page-teacher-form" className="container">
    <PageHeader 
        title="Que incrivel que você quer dar aulas!" 
        
        description="O primeiro passo é preencher esse formulário de inscrição"
    />

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" 
                        label="Nome conpleto" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }} 
                    />

                    <Input 
                        name="avatar"  
                        label="Avatar" 
                        value={avatar} 
                        onChange={(e) => { setAvatar(e.target.value) }} 
                    />
                    
                    
                    <Input 
                        name="whatsapp" 
                        label="whatsapp" 
                        value={whatsapp} 
                        onChange={(e) => { setWhatsapp(e.target.value) }} 
                    />

                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio} 
                        onChange={(e) => { setBio(e.target.value) }} 
                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    
                    <Select 
                        name="subject" 
                        label="Matéria"  
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
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
                    
                    <Input 
                        name="cost"  
                        label="Custo da sua hora por Aula" 
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                    />
                        
                </fieldset>
                
                <fieldset>
                    <legend>
                        Horários disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index )=> {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            
                            <Select 
                                name="week-day" 
                                label="Dia da Semana"  
                                options={[
                                    { value: '0', label: 'Domingo'},
                                    { value: '1', label: 'Segunda-Feira'},
                                    { value: '2', label: 'Terça-Feira'},
                                    { value: '3', label: 'Quarta-Feira'},
                                    { value: '4', label: 'Quinta-Feira'},
                                    { value: '5', label: 'Sexta-feora'},
                                    { value: '6', label: 'Sábado'},
                                ]}
                            />

                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}
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
            </form>
        </main>
    </div>
    )
}

export default TeacherForm;