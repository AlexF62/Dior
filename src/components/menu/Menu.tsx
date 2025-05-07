import React from 'react';
import menuItems, { ItemsMenu } from '../../data/menuItems';
import styled from 'styled-components';

const MenuItem = styled.li`
    font-size: 12px;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const NavMenu = styled.nav`
    margin-left: 130px;
    margin-right: 185px;
`;

const Menu: React.FC = () => {
    return (
        <NavMenu>
            <ul>
                {menuItems.map((item: ItemsMenu, index) => (
                    <MenuItem key={index}>
                        <a href={item.href}>{item.label}</a>
                    </MenuItem>
                ))}
            </ul>
        </NavMenu>
    );
};

export default Menu;
