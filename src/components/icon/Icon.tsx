import React, {FC} from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon: FC<IconPropsType> = ({iconId, height, viewBox, width}) => {
    return (
        <svg width={width || '50px'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
        </svg>
    );
};