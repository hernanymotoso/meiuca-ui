import React from 'react';
import { Button as ButtonCSS } from 'styles';
import { styled } from 'web';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  t?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
