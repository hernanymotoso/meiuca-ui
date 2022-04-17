import React from 'react';
import { Button as ButtonCSS } from 'styles';
import { styled, globalCss } from 'web';

const global = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Archivo&display=swap')",
  ],
  '@font-face': [
    {
      fontFamily: 'Archivo',
      src: "url('https://fonts.googleapis.com/css2?family=Archivo&display=swap')",
    },
  ],
});
const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  t?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  global();
  return <StyledButton {...props}>{children}</StyledButton>;
};
