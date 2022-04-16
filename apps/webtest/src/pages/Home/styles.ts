import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  > div {
    position: relative;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    transition: all 5s;

    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 30px;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;
