import React, {FC} from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu:FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
        </S.DesktopMenu>
    );
};