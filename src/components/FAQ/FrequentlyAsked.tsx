import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FrequentlyAskedText, Text, Title, Card, Flex } from './style';
const FrequentlyAsked = () => {
  return (
    <>
      <Container>
        <FrequentlyAskedText>Frequently Asked ?</FrequentlyAskedText>
        <Flex>
          <Card>
            <Title>Why Do you need our services?</Title>
            <Text>
              In an overly competitive rental market, it is likely that your
              profile does not meet the landlord’s applications requirements
              possibly due to lack of credit report & income. You need our
              services because we put you at an advantage and make you closer to
              your dream rental home.
            </Text>
          </Card>
          <Card>
            <Title>Can I get services with a roommate?</Title>
            <Text>
              You might. It’s best to have your roommate on our platform to
              streamline the rental application process. Otherwise, you can
              still get services but your application’s outcome is partially
              dependent on your roommate.
            </Text>
          </Card>
          <Card>
            <Title>How much does it cost to use our services?</Title>
            <Text>
              The cost could be as low as 5% of your monthly rent. The fees are
              dependent on location, credit history and other factors.
            </Text>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default FrequentlyAsked;
