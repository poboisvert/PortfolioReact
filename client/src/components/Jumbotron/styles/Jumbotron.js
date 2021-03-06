import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 150px;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
