/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import {
  HeroSectionLayout,
  BoxHeroTypoGraphy,
  CreateAccountBtn,
  LoginCreateButton,
  ImageContainer,
  BtnContainer,
  HeroTextContainer,
  BoxHeroSection,
  TextDesigned,
} from './style';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {
  return (
    <HeroSectionLayout>
      <Container>
        <Row>
          <HeroTextContainer md="6">
            <div>
              <Col>
                <TextDesigned>
                  An easier way <br />
                  for&nbsp;
                  <BoxHeroSection>temporary&nbsp;</BoxHeroSection>
                  residents to rent
                </TextDesigned>
              </Col>

              <Col className="d-flex align-items-center">
                <BoxHeroTypoGraphy>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate nisi, eu risus sed auctor risus sed tellus.orem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
                  nisi,
                </BoxHeroTypoGraphy>
              </Col>
              <BtnContainer>
                <Link passHref href="/register">
                  <CreateAccountBtn>Create account</CreateAccountBtn>
                </Link>
                <Link passHref href="/login">
                  <LoginCreateButton>Login</LoginCreateButton>
                </Link>
              </BtnContainer>
            </div>
          </HeroTextContainer>
          <Col
            md="6"
            className="d-flex justify-content-center  justify-content-center"
          >
            <ImageContainer>
              <img src="/images/hero-section.svg" alt="20" />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </HeroSectionLayout>
  );
}

export default HeroSection;
