import React, {FC} from 'react';
import {Icon} from '../../../../components/icon/Icon';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {S} from '../Skills_Styles'

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill: FC<SkillPropsType> = ({iconId, title, description}) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};