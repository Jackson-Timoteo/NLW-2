import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList(){
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponivéis">
                <form  id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="sbject">Matéria</label>
                        <input type="text" id="sbject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="weeb-day">Dia da Semana</label>
                        <input type="text" id="weeb-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
            
    )
}

export default TeacherList;