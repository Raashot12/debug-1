/* eslint-disable @next/next/no-img-element */
/** @format */
import React, { RefObject, useRef } from 'react';
import styled from '@emotion/styled';
import ChevronRight from '../Icons/ChevronRight';
import { SlLocationPin } from 'react-icons/sl';
import { useRouter } from 'next/router';

type TabPanelProps = {
  tabPanel?: any[];
  scrollable: boolean;
  handleDataChange?: (item: string) => void;
};

const TabPanel = ({
  tabPanel,
  scrollable,
  handleDataChange,
}: TabPanelProps) => {
  const contentWrapper: RefObject<any> = useRef(null);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const router = useRouter();
  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number,
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      setScrollLeft(element.scrollLeft);
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  let maxScrollLeft =
    contentWrapper?.current?.scrollWidth - contentWrapper?.current?.clientWidth;
  const handleClick = (id: number, is_available: boolean) => {
    if (is_available) {
      router.push(`/property/${id}`);
    } else {
      alert('Proprty not available');
    }
  };

  return (
    <SummaryBadgeLabelContainer>
      <SummaryBadgeTitleContainer ref={contentWrapper}>
        {tabPanel &&
          tabPanel.map((tabItem) => {
            return (
              <SummaryBadgeTitle key={tabItem.id}>
                <PropertyImage
                  src={tabItem?.image_urls[0]}
                  alt={tabItem?.name}
                  object-fit="cover"
                />
                <section className="px-2 mt-2">
                  <PropertyDescription>
                    {tabItem?.name.substring(0, 30)}...
                  </PropertyDescription>

                  <div className="d-flex align-items-center">
                    <SlLocationPin size="16" color="#505050" />
                    <Location>{tabItem?.location}</Location>
                  </div>
                  <section className="d-flex justify-content-between align-items-center mt-3">
                    BtnApply
                    <Price>
                      ₦{' '}
                      {Number(tabItem.price)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </Price>
                    <BtnApply
                      onClick={() =>
                        handleClick(tabItem.id, tabItem.is_available)
                      }
                    >
                      Apply now
                    </BtnApply>
                  </section>
                </section>
              </SummaryBadgeTitle>
            );
          })}
        <>
          {scrollable && (
            <>
              {maxScrollLeft !== Math.trunc(scrollLeft) && (
                <ChevronRightContainer
                  onClick={() => {
                    sideScroll(contentWrapper.current, 25, 100, 10);
                  }}
                >
                  <ChevronRight />
                </ChevronRightContainer>
              )}
              <>
                {scrollLeft > 0 ? (
                  <ChevronLeftContainer
                    onClick={() => {
                      sideScroll(contentWrapper.current, 25, 100, -10);
                    }}
                  >
                    <ChevronRight />
                  </ChevronLeftContainer>
                ) : (
                  ''
                )}
              </>
            </>
          )}
        </>
      </SummaryBadgeTitleContainer>
    </SummaryBadgeLabelContainer>
  );
};
export default TabPanel;

const SummaryBadgeTitleContainer = styled.div`
  display: flex;
  align-items: center
  flex-shrink: 0;
  overflow-x: scroll;
  width: 100%;
  padding: 7px 20px;
  margin-bottom: 1.5rem;
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`;
export const Price = styled.div`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
`;
export const BtnApply = styled.button`
  background: #d19f21;
  border-radius: 10px;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  padding: 8px 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
  outline: none;
  border: none;
  &:hover {
    transform: translateY(2px);
    background-color: #e1e1e1;
    color: black;
    transition: all 0.25s ease-out;
  }
`;
const PropertyImage = styled.img`
  display: block;
  vertical-align: middle;
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;
const PropertyDescription = styled.p`
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 12px;
`;
export const Location = styled.div`
  margin-left: 3px;
  font-family: 'Lexend', 'Helvetica', 'Arial', sans-serif;
  font-style: italic;
  color: #505050;
`;
const SummaryBadgeTitle = styled.div`
  font-family: 'Gilroy';
  font-weight: 500;
  border-radius: 23px;
  font-size: 14px;
  line-height: 17px;
  min-width: 350px;
  position: relative;
  width: 100%;
  padding: 4px 16px;
  text-align: left;
  color: #051438;
  text-decoration: none;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0px;
  }
`;
const ChevronRightContainer = styled.div`
  background-color: #fff;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  right: 0px;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ChevronLeftContainer = styled(ChevronRightContainer)`
  left: 0px;
  transform: rotate(180deg);
`;
const SummaryBadgeLabelContainer = styled.div`
  position: relative;
`;
