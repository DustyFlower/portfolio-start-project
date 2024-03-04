import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Menu} from '../../components/menu/Menu';

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
`