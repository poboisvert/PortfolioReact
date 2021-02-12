import styled from "styled-components/macro";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 0 1 calc(25% - 1em);
`;

export const Title = styled.div`
  margin: 15px 50px 0 0;
  align-items: flex-start !important;
  font-size: 14px;
  font-weight: 600;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  margin-right: 50px;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 350px;
  object-fit: cover;
`;
