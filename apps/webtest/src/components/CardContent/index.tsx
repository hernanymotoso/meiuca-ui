import React from 'react';
import { Heading, Subtitle, Paragraph, Button } from 'reactcomponents';
import { Container } from './styles';

const CardContent: React.FC = () => {
  console.log();

  return (
    <Container>
      <Heading css={{ marginBottom: '$spacing-stack-xxxs' }}>
        Heading SM
      </Heading>
      <Subtitle css={{ marginBottom: '$spacing-stack-xxs' }}>
        Subtitle SM
      </Subtitle>
      <Paragraph css={{ marginBottom: '$spacing-stack-sm' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        officiis laudantium, rerum, deleniti ex doloribus facere ipsum repellat
        autem molestias illum, ipsa possimus! Excepturi nemo error aliquam minus
        pariatur. Sapiente?
      </Paragraph>
      <Button>Button Label</Button>
    </Container>
  );
};

export default CardContent;
