// import styled from 'styled-components';
import { styled } from 'web';

export const Container = styled('div', {
  width: '357px',
  height: '450px',
  background: '$color-neutral-05',
  borderWidth: '$border-with-thick',
  borderColor: '$color-neutral-04',
  borderStyle: 'solid',
  padding: '$spacing-inset-lg',
  transition: 'transform 0.2s',

  '&:hover': {
    transform: ' translateY(-10px)',
  },
});
