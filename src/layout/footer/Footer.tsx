import React, {FC} from 'react';
import {Icon} from '../../components/icon/Icon';
import {FlexWrapper} from '../../components/FlexWrapper';
import {S} from './Footer_Styles'

const socialItemData = [
    {
        iconId: 'instagram'
    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'vk'
    },
    {
        iconId: 'linkedin'
    }
]

export const Footer:FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>

                    {socialItemData.map((i, index) => (
                        <S.SocialItem key={index}>
                            <S.SocialIconLink>
                                <Icon height={'21'} width={'21'} iconId={i.iconId} viewBox={'0 0 21 21'}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                    ))}

                </S.SocialList>
                <S.Copyright>
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};