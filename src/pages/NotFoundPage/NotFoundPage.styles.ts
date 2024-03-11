import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .notFound-content {
    display: flex;
    flex-direction: column;
    width: 1000px;
    align-items: center;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    button {
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
      background: red;
      color: #fff;
      border: none;
      font-weight: 700;
      position: absolute;
      bottom: 50px;
      left: 10.8%;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 800px) {
      button {
        bottom: 0;
        left: 10.8%;
      }
    }
  }
`;
