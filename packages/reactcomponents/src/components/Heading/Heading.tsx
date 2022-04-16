import React from 'react';

import { Heading  as HeadingCSS } from 'styles';
import { styled } from 'web';

const StyledHeading = styled('h1', HeadingCSS);


export type HeadingProps = React.ComponentProps<typeof StyledHeading> & {};

export const Heading: React.FC<HeadingProps> = ({children}) => {
    return (
        <StyledHeading>{children}</StyledHeading>  
    );
};

