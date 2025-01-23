import React, {FC} from 'react';
import {S} from '../HeaderMenu_Styles';

const items = [
    {
        title: 'Home',
        href: 'home',
    },
    {
        title: 'Skills',
        href: 'skills',
    },
    {
        title: 'Testimony',
        href: 'testimony',
    },
    {
        title: 'Works',
        href: 'works',
    },
    {
        title: 'Contact',
        href: 'contact',
    }
]

export const Menu: FC = () => {
    return (
        <ul>
            {items.map((item, index) => (
                <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-50}>
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.MenuItem>))}
        </ul>
    );
};