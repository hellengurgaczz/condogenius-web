import React from 'react';
import { Button } from 'react-materialize';
import logo from '../../assets/condogenius.png';
import { useNavigate } from 'react-router-dom';

import './login.scss';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='login_content'>
            <img src={logo} className='logo' alt='logo condogenius' />
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
            <div className='actions'>
                <Button className='button_to_enter' onClick={() => {navigate('/home')}}>Entrar</Button>
                <a href=''>Cadastre-se</a>
            </div>
        </div>
    );
};

export default Login;
