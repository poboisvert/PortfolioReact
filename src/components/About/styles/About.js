import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-top: 1.5px solid black;
`;

export const Block = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  flex: 0.7;
  justify-content: space-between;
  margin: 20px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const Image = styled.img`
  display: flex;
  flex: 0.3;
  max-height: 450px;
  object-fit: cover;
  margin: 0 auto;
  padding: 10px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 50px;
  }
`;
