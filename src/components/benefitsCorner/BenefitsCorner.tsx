import React from "react";
import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";

const WhyChoosingUsSection = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  padding: 140px 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  width: 20%;
  font-size: 44px;
  font-weight: 900;
`;
const BenefitsWrapper = styled.div`
  display: flex;
  width: 70%;
`;
const Benefit = styled.div`
  width: 33%;
`;
const BenefitTitle = styled.h3`
  padding: 10px 0;
  font-size: 28px;
  font-weight: 700;
`;
const BenefitText = styled.p`
  width: 80%;
  padding: 20px 0;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 170%;
`;
const LinkToBenefit = styled.div`
  padding: 10px 0;
  font-size: 18px;
  color: #eebd56;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Arrow = styled(CgArrowLongRight)`
  padding-left: 10px;
  font-size: 20px;
`;

const BenefitsCorner: React.FC = () => {
  return (
    <WhyChoosingUsSection>
      <Title>Dlaczego Nasz Sklep ?</Title>
      <BenefitsWrapper>
        <Benefit>
          <BenefitTitle>Solidność</BenefitTitle>
          <BenefitText>
            Nasze meble są wykonane z najwyższą starannością i z użyciem
            trwałych materiałów.
          </BenefitText>
          <LinkToBenefit>
            Więcej informacji
            <Arrow />
          </LinkToBenefit>
        </Benefit>
        <Benefit>
          <BenefitTitle>Różnorodność</BenefitTitle>
          <BenefitText>
            Znajdziesz u nas ogromny wybór mebli dostosowanych do różnych stylów
            i potrzeb.
          </BenefitText>
          <LinkToBenefit>
            Więcej informacji
            <Arrow />
          </LinkToBenefit>
        </Benefit>
        <Benefit>
          <BenefitTitle>Pomysły</BenefitTitle>
          <BenefitText>
            Oferujemy oryginalne meble, które wyróżnią Twoje wnętrze spośród
            innych.
          </BenefitText>
          <LinkToBenefit>
            Więcej informacji
            <Arrow />
          </LinkToBenefit>
        </Benefit>
      </BenefitsWrapper>
    </WhyChoosingUsSection>
  );
};

export default BenefitsCorner;
