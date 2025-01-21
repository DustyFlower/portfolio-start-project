import React, {FC} from 'react';
import {Link} from '../../../../components/Link';
import {Button} from '../../../../components/Button';
import {S} from '../Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: FC<WorkPropsType> = ({title, text, src}) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt={''}/>
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link active href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};