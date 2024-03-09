import styled from "styled-components";
//constants
import { colorBlack, colorRed, colorWhite } from "../../../config/constants";

export const DetailCardContainer = styled.div`
  background-color: ${colorBlack};
  display: flex;
  justify-content: center;
  clip-path: polygon(
    0px 0,
    calc(104% - 20px) 0,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 101%,
    20px 100%,
    0 calc(130% - 20px),
    0 20px
  );
  .header-body-content {
    display: flex;
    width: 960px;
    .img-container {
      width: 300px;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-content {
      width: calc(100% - 348px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 48px;
      .name-content-with-heart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
          width: calc(100% - 32px);
          color: ${colorWhite};
          font-size: 40px;
          font-weight: 700;
          margin: 0px 10px 0px 0px;
        }
      }
      .description-content {
        p {
          font-size: 16px;
          color: ${colorWhite};
        }
      }
      @media (max-width: 1000px) {
        .name-content-with-heart h1 {
          font-size: 30px;
        }
      }
    }
    @media (max-width: 800px) {
      .text-content {
        width: calc(100% - 270px);
        padding: 20px;
      }
      .img-container {
        width: 250px;
        height: 100%;
      }
    }
    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
      .img-container {
        width: 100%;
        height: 300px;
        img {
          object-fit: fill;
        }
      }
      .text-content {
        width: calc(100% - 40px);
      }
    }
  }
`;

export const CommicContainer = styled.div`
  display: flex;
  justify-content: center;
  .comics-body-container {
    display: flex;
    flex-direction: column;
    width: 960px;
    .comics-body-content {
      display: flex;
      list-style: none;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
      &::-webkit-scrollbar {
        height: 10px;
        background: #d9d9d9;
      }
      &::-webkit-scrollbar-thumb {
        background: ${colorRed};
      }
      .commics-content {
        flex: 0 0 100%;
        flex-basis: calc(20% - 16px);
        img {
          width: 100%;
          height: 300px;
        }
        h2 {
          color: ${colorBlack};
          font-size: 16px;
          font-weight: 500;
          line-height: 18px;
          margin: 5px 0px 0px 0px;
        }
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
    @media (max-width: 960px) {
      margin-left: 20px;
      width: calc(100% - 20px);
      .comics-body-content::-webkit-scrollbar {
        display: none;
      }
    }
    @media (max-width: 951px) {
      .comics-body-content .commics-content {
        flex-basis: calc(calc(100% / 4) - 15px);
      }
    }
    @media (max-width: 750px) {
      .comics-body-content .commics-content {
        flex-basis: calc(calc(100% / 3) - 13px);
      }
    }
    @media (max-width: 500px) {
      .comics-body-content .commics-content {
        flex-basis: calc(calc(100% / 2) - 10px);
      }
    }
    @media (max-width: 350px) {
      margin: 20px 0px;
      width: calc(100% - 40px);
      .comics-body-content .commics-content {
        flex-basis: calc(calc(100%) - 0px);
      }
    }
  }
`;
