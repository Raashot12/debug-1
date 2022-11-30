/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { SlLocationPin } from 'react-icons/sl';
import {
  BtnApply,
  Location,
  Price,
} from '../../../src/components/ScrollComponent/TabPanel';
import Meta from '../../../src/components/Meta';
import { RootState } from '../../../src/redux/store';

const PropertyDetailPage = () => {
  const [index, setIndex] = useState(0);
  const property = useSelector(
    (state: RootState) => state.property.detailedPage,
  );
  console.log(property);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Meta title={`Sheruta|${property?.name}`} />
      <Container>
        <div className="mt-4">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {property?.image_urls.map((data: any, index: number) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={data}
                    alt="First slide"
                    height="500px"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="mt-4">
            <h3>{property?.name}</h3>
            <div className="d-flex align-items-center">
              <SlLocationPin size="16" color="#505050" />
              <Location>{property?.location}</Location>
            </div>
            <section className="d-flex justify-content-between align-items-center mt-3 mb-3">
              <Price>
                ₦{' '}
                {Number(property?.price)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </Price>
              <BtnApply onClick={() => null}>Pay now</BtnApply>
            </section>
          </div>
          <main className="mb-5">{property?.description}</main>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetailPage;
