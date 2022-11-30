/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { server } from '../../../config';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { SlLocationPin } from 'react-icons/sl';
import {
  BtnApply,
  Location,
  Price,
} from '../../../src/components/ScrollComponent/TabPanel';
import Meta from '../../../src/components/Meta';

const PropertyDetailPage = (props: any) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Meta title={`Sheruta|${props.data?.name}`} />
      <Container>
        <div className="mt-4">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.data?.image_urls.map((data: any, index: number) => {
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
            <h3>{props.data?.name}</h3>
            <div className="d-flex align-items-center">
              <SlLocationPin size="16" color="#505050" />
              <Location>{props.data?.location}</Location>
            </div>
            <section className="d-flex justify-content-between align-items-center mt-3 mb-3">
              <Price>
                ₦{' '}
                {Number(props.data?.price)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </Price>
              <BtnApply onClick={() => null}>Pay now</BtnApply>
            </section>
          </div>
          <main className="mb-5">{props.data?.description}</main>
        </div>
      </Container>
    </div>
  );
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const res = await fetch(`${server}/api/property/${context.params.id}`);

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/property`);

  const property = await res.json();
  const ids = property?.map((value: any) => value.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default PropertyDetailPage;
