import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from'./styles'

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={92} nome="Manoel Santos" image="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
            <UserInfo percentual={80} nome="Manoel Santos" image="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
            <UserInfo percentual={67} nome="Manoel Santos" image="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
            <UserInfo percentual={50} nome="Manoel Santos" image="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
            <UserInfo percentual={49} nome="Manoel Santos" image="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
        </Column>
    </Container>
    </>)
}

export { Feed }