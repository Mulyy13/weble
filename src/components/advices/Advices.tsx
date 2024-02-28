import React from "react";
import styled from "styled-components";
import projectImage from "./doradztwo.jpg";
import { CgArrowLongRight } from "react-icons/cg";

const AdvicesSection = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

const TextWrapper = styled.div`
  width: 60%;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AdvicesSectionTitle = styled.h1`
  text-align: center;
  font-size: 44px;
  padding: 20px 0;
`;

const AdvicesSectionSubtitle = styled.p`
  font-weight: bold;
  padding: 20px 0px;
  font-size: 20px;
  width: 80%;
`;

const AdvicesSectionText = styled.p`
  padding: 20px 0px;
  font-size: 17px;
  width: 80%;
  letter-spacing: 0.4px;
`;

const ImageWrapper = styled.div`
  width: 40%;
  padding: 50px 0;
  position: relative;
  height: 100%;
`;

const GrayBackground = styled.div`
  z-index: 2;
  width: 100%;
  height: 300px;
  border-radius: 35px;
  background-color: whitesmoke;
`;

const SecondGrayBackground = styled.div`
  z-index: 3;
  width: 60%;
  padding-left: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: whitesmoke;
`;
const Image = styled.div`
  z-index: 1;
  width: 90%;
  height: 350px;
  background-image: url(${projectImage});
  background-size: cover;
  position: absolute;
  top: 50px;
`;
const LinkToAdvices = styled.a`
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

const GroundShadow = styled.div``;

const Advices = () => {
  return (
    <AdvicesSection>
      <ImageWrapper>
        <Image />
        <GrayBackground />
        <GroundShadow></GroundShadow>
        <SecondGrayBackground />
      </ImageWrapper>
      <TextWrapper>
        <AdvicesSectionTitle>Doradztwo Zakupowe</AdvicesSectionTitle>
        <AdvicesSectionSubtitle>
          Chcesz oryginalnie urządzić wnętrze, ale nie wiesz gdzie szukać
          odpowiednich mebli i sprzętów?
        </AdvicesSectionSubtitle>
        <AdvicesSectionText>
          Nasz zespół ekspertów z przyjemnością służy pomocą i dzieli się
          cennymi wskazówkami dotyczącymi aranżacji wnętrz. Odkryjcie
          inspirujące porady, najnowsze trendy i praktyczne rozwiązania, które
          pomogą Wam stworzyć wymarzoną przestrzeń. Aby uzyskać więcej
          informacji, skontaktujcie się z naszym zespołem doradztwa lub
          odwiedźcie nasz sklep stacjonarny. Jesteśmy tutaj, aby uczynić Wasze
          wnętrza wyjątkowymi!
        </AdvicesSectionText>
        <LinkToAdvices href={"/purchasingAdvice"}>
          Sprawdź ofertę <Arrow />{" "}
        </LinkToAdvices>
      </TextWrapper>
    </AdvicesSection>
  );
};

export default Advices;
