import React from 'react';
import { Heading, Subtitle, Paragraph, Button } from 'reactcomponents';
import { INew } from '../../pages/Home';
import { Container } from './styles';

interface ICardContentProps {
  newContent: INew;
}

const CardContent: React.FC<ICardContentProps> = ({ newContent }) => {
  console.log();

  return (
    <Container>
      <Heading
        css={{
          marginBottom: '$spacing-stack-xxxs',
          fontSize: '$font-size-sm',
        }}
      >
        {newContent.title}
      </Heading>
      <Subtitle
        css={{
          marginBottom: '$spacing-stack-xxs',
          fontSize: '$font-size-xxxs',
        }}
      >
        {newContent.description}
      </Subtitle>
      <Paragraph
        css={{ marginBottom: '$spacing-stack-sm', fontSize: '$font-size-xxs' }}
      >
        {newContent.content}
      </Paragraph>
      <Button // eslint-disable-next-line no-return-assign
        onClick={() => (window.location.href = `${newContent.url}`)}
      >
        Leia Mais...
      </Button>
    </Container>
  );
};

export default CardContent;
