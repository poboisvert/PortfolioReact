import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-bottom: 1.5px solid black;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.9;
`;

export const Logo = styled.div`
  display: flex;
  flex: 0.1;
  object-fit: contain;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid whitesmoke;
  margin-right: 50px;
  padding: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex: 0.1;
    object-fit: contain;
    border: 0;
    overflow: hidden;
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

export const Span = styled.span`
  font-size: 10px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 8px;
    font-weight: 400;
  }
`;

export const Top = styled.p`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
