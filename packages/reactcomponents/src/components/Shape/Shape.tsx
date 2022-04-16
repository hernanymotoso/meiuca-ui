import React from 'react';

import { Shape as ShapeCSS } from 'styles';
import { styled } from 'web';

const StyledShape = styled('div', ShapeCSS);


export type ShapeProps = React.ComponentProps<typeof StyledShape> & {};

export const Shape: React.FC<ShapeProps> = ({children, props}) => {
    return (
        <StyledShape {...props}>{children}</StyledShape>  
    );
};

