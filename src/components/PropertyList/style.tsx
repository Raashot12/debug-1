import styled from '@emotion/styled';
import { Col } from 'react-bootstrap';

export const ExploreMore = styled.a`
  color: #b98709;
  cursor: pointer;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
export const LastestPropertyText = styled.h2`
  color: black;
  cursor: pointer;
  line-height: 1.15;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 35px;
  margin: 0;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
