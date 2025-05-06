import React from 'react';
import menuItems, { ItemsMenu } from '../../data/menuItems';
import iconMenu, { MenuIcons } from '../../data/iconMenu';

const Menu: React.FC = () => {
    return (
        <nav>
            <ul>
                {menuItems.map((item: ItemsMenu, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <ul>
                {iconMenu.map((item: MenuIcons) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.alt} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
