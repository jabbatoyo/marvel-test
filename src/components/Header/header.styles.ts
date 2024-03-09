import styled from "styled-components";
//contants
import { colorBlack, colorWhite } from "../../config/constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 96px);
  padding: 16px 48px 16px 48px;
  background-color: ${colorBlack};
  border-bottom: solid 1px #333333;
  .link-content {
    text-decoration: none;
    img {
      width: 130px;
      height: 52px;
    }
  }
  .favorite-content {
    display: flex;
    h3 {
      padding: 0px 0px 0px 10px;
      color: ${colorWhite};
      margin: 0;
    }
  }
  @media (max-width: 800px) {
    width: calc(100% - 40px);
    padding: 16px 20px 16px 20px;
  }
`;
