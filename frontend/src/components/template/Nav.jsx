import './Nav.css'
import NavItens from './NavItens'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItens href="/" icon="home" title="Início" />
            <NavItens href="/users" icon="users" title="Usuarios" />
        </nav>
    </aside>



            {/* 
                Refatorar o código 
                criar um novo componente(exemplo: NavItens.jsx)
                importar o componente
            */}
            {/* <a href="#/">
                <i className="fa fa-home"></i> Início
            </a> */}
            {/* <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a> */}