import styled from "styled-components/macro";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  z-index: 999;
  transition: all 0.5s linear;
  @media (max-width: 768px) {
    min-width: 250px !important;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 0;
    width: 100%;
    z-index: 999;
  }
`;

export const Leftside = styled.div`
  display: flex;
  object-fit: contain;
  align-items: center;
  color: #5c3cfc;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 2px;
    font-size: 8px;
    font-weight: 400;
    align-items: center;
  }
`;

export const Rightside = styled.div`
  display: flex;
`;
