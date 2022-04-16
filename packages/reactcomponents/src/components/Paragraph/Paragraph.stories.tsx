import React from 'react';
import { storiesOf } from '@storybook/react';

import { Paragraph } from './Paragraph';

storiesOf('Paragraph', module).add('Default', () => <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corrupti quibusdam modi accusantium sequi itaque dolor fugiat error architecto provident porro ducimus nisi aspernatur tenetur dolore velit, ex vero est.</Paragraph>);