import styled from "styled-components";

export const Container = styled.div`
  .img-container {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .sepatator-line {
    margin: 0;
    border: solid 3px red;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 220px);
    padding: 16px 16px 24px 16px;
    background-color: black;
    clip-path: polygon(
      0px 0,
      calc(112% - 20px) 0,
      100% 20px,
      100% calc(108% - 20px),
      calc(103% - 20px) 101%,
      20px 100%,
      0 calc(130% - 20px),
      0 20px
    );
    h2 {
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      color: #fff;
    }
  }
`;
