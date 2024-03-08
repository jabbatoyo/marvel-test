import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  @media (max-width: 1350px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
