import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("banner.png");
  color: white;
  border-radius: 15px;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
