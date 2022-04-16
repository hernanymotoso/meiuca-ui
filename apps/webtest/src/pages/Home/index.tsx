import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import Masonry from 'react-masonry-css';
import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container } from './styles';
import Footer from '../../components/Footer';

const breakpoints = {
  default: 4,
  1585: 2,
  720: 1,
};

const menuItens = [
  {
    id: uuidV4(),
    name: 'Home',
    path: '#/home',
  },
  {
    id: uuidV4(),
    name: 'Clientes',
    path: '#/clientes',
  },
  {
    id: uuidV4(),
    name: 'Sobre',
    path: '#/sobre',
  },
];

const Home: React.FC = () => {
  console.log();

  return (
    <>
      <Header menuItens={menuItens} />
      <Container>
        <h1>Home</h1>

        <div>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Masonry>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
