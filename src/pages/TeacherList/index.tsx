import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeacherList(){
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponivéis">
                <form  id="search-teacher">
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

                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
            
    )
}

export default TeacherList;