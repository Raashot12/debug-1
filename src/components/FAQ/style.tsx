import styled from '@emotion/styled';
import { Col, Row } from 'react-bootstrap';

export const FrequentlyAskedText = styled.p`
  font-size: 2.1875rem;
  margin-top: 4rem;
  line-height: 1.15;
  margin-bottom: 49px;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  @media (max-width: 768px) {
    margin-top: 2.5rem;
    font-size: 1.8rem;
  }
`;
export const Title = styled.h1`
  line-height: 1.3;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 1.44rem;
  margin-bottom: 19px;
`;
export const Card = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.12);
  max-width: 32% !important;
  overflow: hidden;
  padding: 30px 30px !important;
  min-height: 350px;
  border-radius: 21px;
  border: 1px solid #dfdfdf;
  &:hover {
    background-color: #d19f21;
    color: #fff !important;
    transition: all ease-in;
    transition-duration: 1s;
  }
  @media (max-width: 992px) {
    max-width: 101% !important;
    min-height: 300px;
    margin-bottom: 25px;
  }
`;
export const Text = styled.p`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  line-height: 1.5;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;
