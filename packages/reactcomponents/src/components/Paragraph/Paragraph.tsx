import React from 'react';

import { Paragraph as ParagraphCSS } from 'styles';
import { styled } from 'web';

const StyledParagraph = styled('p', ParagraphCSS);


export type ParagraphProps = React.ComponentProps<typeof StyledParagraph> & {};

export const Paragraph: React.FC<ParagraphProps> = ({children, ...props}) => {
    return (
        <StyledParagraph {...props}>{children}</StyledParagraph>  
    );
};

