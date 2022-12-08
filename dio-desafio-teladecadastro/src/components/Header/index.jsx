import React from 'react';
import { useNavigate } from "react-router-dom";
//import { Navigate } from 'react-router-dom';
import logo from "../../assets/logo-dio.png";
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';


const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Dode</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                    
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
                ) : (
                    <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickHome} />
                            <Button title="Cadastrar" onClick={handleClickRegister} />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }