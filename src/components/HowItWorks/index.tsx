/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  HeaderTitle,
  PrimarySubHeader,
  ContainerWidth,
  LastSubHeader,
  BoxOne,
  PaperBg,
  TypographyOne,
  CardContainer,
  TypographyTwo,
  PaperBgOutterContainer,
} from './styles';
import howItworksData from './data';

const index = () => {
  return (
    <div
      className="pt-md-5 pb-md-5 pt-3 pb-3 d-flex align-content-center"
      style={{ background: '#FAFAFA' }}
    >
      <Container>
        <ContainerWidth>
          <div>
            <HeaderTitle>HOW IT WORKS</HeaderTitle>
            <PrimarySubHeader>
              We help temporary residents find homes of their choice faster,
              easier and in a more affordable way.
            </PrimarySubHeader>
            <LastSubHeader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              nisi, eu risus sed auctor risus sed tellus.
            </LastSubHeader>
          </div>
        </ContainerWidth>
        <Row className="align-items-center">
          <Col lg="6" md="12">
            {/* <img src="/images/how-it-works-image.svg" alt="" /> */}
          </Col>
          <CardContainer lg="6" md="12" className="mt-4">
            {howItworksData.map((content) => (
              <PaperBgOutterContainer key={content.id}>
                <PaperBg>
                  <BoxOne>{content.icon}</BoxOne>

                  <div>
                    <TypographyOne>{content.title}</TypographyOne>
                    <TypographyTwo>{content.content}</TypographyTwo>
                  </div>
                </PaperBg>
              </PaperBgOutterContainer>
            ))}
          </CardContainer>
        </Row>
      </Container>
    </div>
  );
};

export default index;
