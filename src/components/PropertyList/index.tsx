import React from 'react';
import { Container } from 'react-bootstrap';
import { ExploreMore, LastestPropertyText } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TabPanel from '../ScrollComponent/TabPanel';

const PropertyList = () => {
  const property = useSelector((state: RootState) => state.property);
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-md-5 mt-4 align-items-center">
          <LastestPropertyText>Lastest Properties</LastestPropertyText>
          <ExploreMore>Explore more</ExploreMore>
        </div>
        <section className="mt-4">
          <TabPanel scrollable={true} tabPanel={property.property} />
        </section>
      </Container>
    </>
  );
};

export default PropertyList;
