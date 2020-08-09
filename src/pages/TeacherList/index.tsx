import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList(){
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponivéis">
                <form  id="search-teachers">
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
                <article className="teacher-item">
                    <header>
                        <img src="" alt=""/>
                        <div>
                            <strong>Jackson Timóteo</strong>
                            <span>Frond-End Dev.</span>
                        </div>
                    </header>

                    <p>
                    Mussum Ipsum, aaaacacilds vidis litro abertis. Praesent vel viverra nisi. 
                    Mauris aliquet nunc non turpis scelerisque, eget. <br></br>
                    Casamentiss faiz malandris se pirulitá
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$110,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
            
    )
}

export default TeacherList;