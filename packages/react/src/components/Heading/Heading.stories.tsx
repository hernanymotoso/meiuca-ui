import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading } from './Heading';

storiesOf('Heading', module).add('Default', () => <Heading>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corrupti quibusdam modi accusantium sequi itaque dolor fugiat error architecto provident porro ducimus nisi aspernatur tenetur dolore velit, ex vero est.</Heading>);