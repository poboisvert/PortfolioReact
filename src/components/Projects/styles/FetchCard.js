import styled from "styled-components/macro";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 calc(25% - 1em);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin: 15px 50px 0 0;
  align-items: flex-start !important;
  font-size: 14px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Thumbnail = styled.div`
  margin-right: 50px;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 350px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;
