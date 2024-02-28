import React, { useState } from "react";
import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";

const BestSellingWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  // background: linear-gradient(to top, rgba(245, 245, 245, 1), rgba(245, 245, 245, 0) 100px, transparent);
`;
const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  padding: 50px 0;
  font-weight: bold;
`;

const TypeSlider = styled.ul`
  display: flex;
  width: 30%;
  border-radius: 35px;
  justify-content: space-around;
  background-color: #ebebeb;
  position: relative;
`;

const TypeSliderItem = styled.li`
  list-style: none;
  padding: 20px 0;
  font-size: 20px;
  cursor: pointer;
`;

const ProductSlider = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const ProductSliderItem = styled.li`
  width: 20%;
  height: 300px;
  background-color: white;
  list-style: none;
  border-radius: 25px;
`;

const ViewAllButton = styled.a`
  padding: 20px 0;
  color: #eebd56;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled(CgArrowLongRight)`
  padding-left: 10px;
  font-size: 20px;
`;

const BestSelling: React.FC = () => {
  const [sliderButtonPosition, setSliderButtonPosition] = useState<number>(0);
  const SliderButton = styled.div`
    margin: 0 3%;
    position: absolute;
    width: 19%;
    height: 80%;
    background-color: whitesmoke;
    left: ${sliderButtonPosition}%;
    transition: left 1s ease;
    top: 10%;
    border-radius: 35px;
  `;
  return (
    <BestSellingWrapper>
      <Title>Najpopularniejsze Produkty</Title>
      <TypeSlider>
        <SliderButton></SliderButton>
        <TypeSliderItem
          onClick={() => {
            setSliderButtonPosition(0);
          }}
        >
          Krzesła
        </TypeSliderItem>
        <TypeSliderItem
          onClick={() => {
            setSliderButtonPosition(25);
          }}
        >
          Łóżka
        </TypeSliderItem>
        <TypeSliderItem
          onClick={() => {
            setSliderButtonPosition(50);
          }}
        >
          Sofy
        </TypeSliderItem>
        <TypeSliderItem
          onClick={() => {
            setSliderButtonPosition(75);
          }}
        >
          Lampy
        </TypeSliderItem>
      </TypeSlider>
      <ProductSlider>
        <ProductSliderItem />
        <ProductSliderItem />
        <ProductSliderItem />
        <ProductSliderItem />
      </ProductSlider>
      <ViewAllButton href="/store">
        Zobacz Wszystkie <Arrow />
      </ViewAllButton>
    </BestSellingWrapper>
  );
};

export default BestSelling;
