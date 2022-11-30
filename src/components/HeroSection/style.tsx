import styled from '@emotion/styled';
import { Col } from 'react-bootstrap';

export const HeroSectionLayout = styled.div`
  background: #fff7e4;
  padding-top: 60px;
  @media (max-width: 767px) {
    padding-top: 12px;
  }
`;
export const BoxHeroSection = styled.div`
  color: #b98709;
  position: relative;
  display: inline-block;
`;
export const BoxHeroTypoGraphy = styled.p`
  color: #929292;
`;
export const BoxHeroSectionTemporary = styled.p`
  margin: 0;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.8;
  color: #929292;
  @media (min-width: 420px) {
    font-size: 50px;
  }
`;
export const TextDesigned = styled.div`
  margin-bottom: 15px;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 400;
  color: #000;
  font-weight: 500;
  @media (max-width: 769px) {
    font-size: 40px;
  }
`;

export const CreateAccountBtn = styled.button`
  margin-right: 30px;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 20px;
  padding-right: 20px;
  color: #b88400;
  background-color: #fff;
  text-align: center;
  outline: none;
  border: none;
  line-height: 1;
  height: 3.3125rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 0.625rem;
  font-weight: 500;
`;
export const LoginCreateButton = styled.button`
  margin: 0;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: #d19f21;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  outline: none;
  border: none;
  text-align: center;
  line-height: 1;
  height: 3.3125rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 0.625rem;
  font-weight: 500;
`;
export const ImageContainer = styled.div`
  max-width: 440px;
`;

export const BtnContainer = styled(Col)`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const HeroTextContainer = styled(Col)`
  padding-top: 60px;
`;
