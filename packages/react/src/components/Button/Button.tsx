import React from "react";
import {Button as ButtonCSS } from 'styles';
import { styled, globalCss } from 'web';


const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    t?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
    
    return (
        <StyledButton>{children}</StyledButton>
    );
};