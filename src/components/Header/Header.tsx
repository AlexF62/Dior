import React from 'react';
import { Container } from '../../ui/Container';
import { Wrapper } from '../../ui/Wrapper';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Menu from '../menu/Menu';

const Header: React.FC = () => {
    return (
        <header>
            <Container>
                <Wrapper>
                    <Logo />
                    <Title as='h1'>LA COLLECTION PRIVÉE CHRISTIAN DIOR</Title>
                    <Menu />
                </Wrapper>
            </Container>
        </header>
    );
};

export default Header;
