import React, {FC} from 'react';
import styled from 'styled-components';

type MenuPropsType = {
    menuItems: string[]
}

export const Menu: FC<MenuPropsType> = ({menuItems}) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`