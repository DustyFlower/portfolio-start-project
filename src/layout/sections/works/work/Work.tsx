import React, {FC} from 'react';
import styled from 'styled-components';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: FC<WorkPropsType> = ({title, text,src}) => {
    return (
        <StyledWork>
            <Image src={src} alt={''}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: #ffe869;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`