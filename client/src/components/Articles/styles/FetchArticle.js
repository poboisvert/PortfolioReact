import styled from "styled-components/macro";

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-right: 1px solid black;
  &:last-child {
    border-right: 0;
  }
  &:hover {
    background-color: #7860f8;
  }
  &:last-child:hover {
    border-radius: 0 20px 20px 0;
  }
  &:first-child:hover {
    border-radius: 20px;
  }
  &:first-child:hover {
    border-radius: 20px 0 0 20px;
  }
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid black;
    &:last-child:hover {
      border-radius: 0 0 20px 20px;
    }
    &:first-child:hover {
      border-radius: 20px 20px 0 0;
    }
    &:last-child {
      border: 0;
    }
  }
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
  }
`;

export const Image = styled.img`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 90px;
  }
`;

export const Text = styled.h4`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 10px;
`;
