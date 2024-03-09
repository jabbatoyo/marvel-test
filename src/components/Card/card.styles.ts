import styled from "styled-components";
//constants
import { colorBlack, colorRed, colorWhite } from "../../config/constants";

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
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: calc(100% - 220px);
    padding: 16px 16px 24px 16px;
    background-color: ${colorBlack};
    z-index: 0;
    overflow: hidden;
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
      width: calc(100% - 29px);
      margin: 0px 5px 0px 0px;
      font-size: 14px;
      font-weight: 400;
      color: ${colorWhite};
    }
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      background: ${colorRed};
      height: 5px;
      width: 100%;
      transform: scale(1);
      transition: transform 0.25s ease-out;
    }
  }
  &:hover {
    .footer:before {
      transform: scale(100);
    }
    .footer .heart-icon {
      path {
        fill: none;
        stroke: ${colorWhite};
      }
    }
  }
`;
