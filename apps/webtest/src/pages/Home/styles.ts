import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1194px;
  padding: 0 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  > h1 {
    width: 100%;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 50px;
    align-items: flex-start;
  }

  > div {
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
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

    @media screen and (max-width: 770px) {
      padding-left: 0px;
    }
  }

  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }

  .divSpinner {
    height: calc(100vh - 602px);
  }
`;
