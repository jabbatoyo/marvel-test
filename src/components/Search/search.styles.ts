import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  svg {
    position: absolute;
    top: 10px;
  }
  input {
    outline: none;
    width: calc(100% - 18px);
    height: 27px;
    padding: 0px 0px 0px 18px;
    border: none;
    border-bottom: 2px solid;
  }
`;
