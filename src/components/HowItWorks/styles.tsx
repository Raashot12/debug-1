import styled from '@emotion/styled';
import { Col } from 'react-bootstrap';
import pxToRem from '../../assets/theme/functions/pxToRem';
export const HeaderTitle = styled.p`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #bf911c;
  font-family: Poppins;
  font-weight: 500;
  text-align: center;
`;
export const PrimarySubHeader = styled.h2`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  font-size: 2rem;
  line-height: 1.2;
  padding-top: 0.6875rem;
  padding-bottom: 0.6875rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const LastSubHeader = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ContainerWidth = styled(Col)`
  display: flex;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 98%;
  }
`;
export const BoxOne = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 20;
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  margin-right: 36.8px;
  position: 'relative';
`;

export const Paper = styled.div``;
export const TypographyOne = styled.p`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  font-size: 1.4375rem;
  line-height: 1.3;
  padding-bottom: 0.5625rem;
`;
export const TypographyTwo = styled.p`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #575757;
  font-size: 1rem;
  line-height: 1.5;
`;
export const PaperBg = styled(Col)`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: -webkit-box;
  cursor: pointer;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1.2rem;
  border-radius: 1.31rem;
`;
export const PaperBgOutterContainer = styled(Col)`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const CardContainer = styled(Col)``;
