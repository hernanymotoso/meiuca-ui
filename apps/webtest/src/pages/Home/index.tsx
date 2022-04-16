import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Masonry from 'react-masonry-css';
import { Spinner } from 'react-bootstrap';
import { Button } from 'reactcomponents';
import CardContent from '../../components/CardContent';
import Header from '../../components/Header';

import { Container } from './styles';
import Footer from '../../components/Footer';
import api from '../../services/api';

const breakpoints = {
  default: 4,
  1585: 2,
  770: 1,
};

const menuItens = [
  {
    id: uuidV4(),
    name: 'Home',
    path: '#/home',
  },
  {
    id: uuidV4(),
    name: 'Notícias',
    path: '#/noticias',
  },
  {
    id: uuidV4(),
    name: 'Sobre',
    path: '#/sobre',
  },
];

export interface INew {
  title: string;
  description: string;
  content: string;
  url: string;
}
interface INewsResponse {
  articles: INew[];
}

const Home: React.FC = () => {
  const [news, setNews] = useState<INewsResponse>({} as INewsResponse);
  const [loading, setLoading] = useState(true);
  const [isFourItens, setIsFourItens] = useState(true);

  const [currentNews, setCurrentNews] = useState<INew[]>([] as INew[]);
  useEffect(() => {
    api.get<INewsResponse>('').then(response => {
      console.log('Home response', response.data);
      setNews(response.data);
      setLoading(false);
    });
  }, []);

  const showAllItens = useCallback(() => {
    setCurrentNews(news.articles);
    setIsFourItens(false);
  }, [news.articles]);

  const showFourItems = useCallback(() => {
    const newNews = news.articles?.filter((item, index) => index < 4);
    setCurrentNews(newNews);
    setIsFourItens(true);
  }, [news.articles]);

  useEffect(() => {
    showFourItems();
  }, [showFourItems]);

  // console.log('Loading', news?.articles[1]);
  return (
    <>
      <Header menuItens={menuItens} />

      <Container>
        <h1>Notícias </h1>

        {!loading ? (
          <div>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {currentNews?.length > 0 &&
                currentNews?.map(item => (
                  <CardContent key={item.url} newContent={item} />
                ))}
            </Masonry>
            <Button
              onClick={
                isFourItens ? () => showAllItens() : () => showFourItems()
              }
              color="btn-secondary"
            >
              {isFourItens ? 'Ver tudo' : 'Ver menos'}
            </Button>
          </div>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
