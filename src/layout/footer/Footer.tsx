import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';
import {FlexWrapper} from '../../components/FlexWrapper';
import {theme} from '../../styles/Theme';
import {font} from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} iconId={'instagram'} viewBox={'0 0 21px 21px'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${font({family: " 'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialIconLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;

`