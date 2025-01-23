import React, {FC} from 'react';
import {Icon} from '../icon/Icon';
import {animateScroll as scroll} from 'react-scroll';

export const Logo:FC = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={'code'}/>
        </a>
    );
};