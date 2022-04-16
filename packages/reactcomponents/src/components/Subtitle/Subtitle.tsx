import React from 'react';

import { Subtitle as SubtitleCSS } from 'styles';
import { styled } from 'web';

const StyledSubtitle = styled('h2', SubtitleCSS);


export type SubtitleProps = React.ComponentProps<typeof StyledSubtitle> & {};

export const Subtitle: React.FC<SubtitleProps> = ({children}) => {
    return (
        <StyledSubtitle>{children}</StyledSubtitle>  
    );
};

