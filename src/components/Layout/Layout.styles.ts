import styled from "styled-components";

export const Container = styled.div<{ $paddingOff?: boolean }>`
  width: 100%;
  height: 100%;
  .body-container {
    padding: ${(props) => (props.$paddingOff ? "0px" : "16px 48px 16px 48px")};
    @media (max-width: 800px) {
      padding: ${(props) =>
        props.$paddingOff ? "0px" : "16px 20px 16px 20px"};
    }
  }
`;
