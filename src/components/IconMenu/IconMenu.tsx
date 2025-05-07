/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import iconMenu, { MenuIcons } from '../../data/iconMenu';
import styled from 'styled-components';

const IconItem = styled.li`
    display: flex;
    gap: 0 20px;
`;

const IconMenu: React.FC = () => {
    return (
        <IconItem>
            {iconMenu.map((item: MenuIcons) => (
                <li key={item.id}>
                    <a href='#'>
                        <img src={item.image} alt={item.alt} />
                    </a>
                </li>
            ))}
        </IconItem>
    );
};

export default IconMenu;
