import React, {FC} from 'react';
import {Icon} from '../../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill: FC<SkillPropsType> = ({iconId, title, description}) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(255, 255, 255, 0.56);
    margin: 10px;
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`