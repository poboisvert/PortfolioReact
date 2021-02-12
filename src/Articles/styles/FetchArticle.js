import styled from "styled-components/macro";

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding: 15px;
  border-right: 1px solid black;
`;

export const Title = styled.div`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Preview = styled.div`
  top: 0;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 50px;
  }
`;

export const Last = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding: 15px;
  border-right: 0 !important;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 50px;
  }
`;

export const Text = styled.h4`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 10px;
`;
