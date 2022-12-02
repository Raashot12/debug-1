/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlinePayment } from 'react-icons/md';
import {
  BtnApply,
  Location,
  Price,
} from '../../../src/components/ScrollComponent/TabPanel';
import Meta from '../../../src/components/Meta';
import { RootState } from '../../../src/redux/store';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';

const PropertyDetailPage = () => {
  const [index, setIndex] = useState(0);
  const property = useSelector(
    (state: RootState) => state.property.detailedPage,
  );

  const MDEditor = dynamic(
    () => import('@uiw/react-md-editor').then((mod) => mod.default),
    { ssr: false },
  );
  const EditerMarkdown = dynamic(
    () =>
      import('@uiw/react-md-editor').then((mod) => {
        return mod.default.Markdown;
      }),
    { ssr: false },
  );
  const Markdown = dynamic(
    () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
    { ssr: false },
  );

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Meta title={`Sheruta|${property?.name}`} />
      <Container>
        <div className="mt-4 mb-4">
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
          <main className="mb-5">
            <EditerMarkdown source={property?.description} />
          </main>
          <div>
            <h6 className="ml-3  text-info">
              Payment Type: {property?.payment_type.name}
            </h6>
            <div className="d-flex  flex-column">
              <h5 className="ml-3">Agent Name: {property?.agent.name}</h5>
              <p className="mb-1">Location: {property.agent.location}</p>
              <p className="mb-1">
                Contact number: {property?.agent_profile.phone_number}
              </p>
              <p className="mb-2">Email: {property?.agent_profile.email}</p>
              <p className="mb-2">Agent Bio: {property?.agent_profile.bio}</p>
              <Button
                className={
                  property?.agent.is_verified
                    ? 'btn btn-success  btn-sm w-25'
                    : 'btn btn-warning btn-md w-25'
                }
              >
                {property?.agent.is_verified ? 'Verified' : 'Not verified'}
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-info">Inspection info</h5>
            <ul>
              <li>Bedroom: {property?.bedroom}</li>
              <li>Bathroom: {property?.bathroom}</li>
              <li>Toilet: {property?.toilet}</li>
              <li>Sittingroom: {property?.sittingroom}</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetailPage;
