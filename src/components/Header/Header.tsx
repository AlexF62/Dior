import React from 'react';
import { Container } from '../../ui/Container';
import { Wrapper } from '../../ui/Wrapper';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Menu from '../menu/Menu';
import IconMenu from '../IconMenu/IconMenu';

const Header: React.FC = () => {
    return (
        <header>
            <Container>
                <Wrapper
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='30px'
                >
                    <Logo />
                    <Title as='h3'>LA COLLECTION PRIVÉE CHRISTIAN DIOR</Title>
                    <Menu />
                    <IconMenu />
                </Wrapper>
            </Container>
        </header>
    );
};

export default Header;
