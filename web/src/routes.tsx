import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

/* o react-router-dom faz a verificacao de conteudo, se o caminho que ta na url(no 'path') contem o que tem no componente('component') | 
exact = exatamente igual a rota/url que ta sendo passada ('path') e retorna exatamente a pagina em si e nao todas por causa do ('/') */
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />        
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />

        </BrowserRouter>
    );
}

export default Routes;