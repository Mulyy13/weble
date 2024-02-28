import React, { useState } from "react";
import styled from "styled-components";
import backgroundRoom from "./backgroundAvices.jpg";
import Navbar from "../../components/navbar/Navbar";
import AdviceImg from "./doradztwo-img.jpg";
import InteriorImg from "./interiorProject.jpg"

const PageWrapper = styled.div`
  
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: rgba(128, 128, 128, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderAdvices = styled.div`
  background-image: url(${backgroundRoom});
  background-attachment: fixed;
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: 100% 100%;
  background-color: gray;
`;

const Title = styled.h3`
  font-size: 72px;
  color: white;
  height: 20%;
`;

const PurchasingAdviceDescription = styled.div`
  width: 90%;
  background-color: rgb(129, 114, 105);
  padding:0 5%;
  margin: 0 auto;
  color: white;
  display: flex;
  padding-top: 5%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`;
const DescriptionTitle = styled.h4`
  color: whitesmoke;
  font-size: 24px;
  padding-bottom: 40px;
  text-align: center;
`;
const DescriptionText = styled.p`
  font-size: 18px;
  padding: 10px 0;
  width: 80%;
  margin: 0 auto;
`;
const DescriptionImageWrapper = styled.div`
  width: 25%;
`;
const DescriptionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HowItWorksSection = styled.div`
  width: 80%;
  padding: 5% 10%;
  color: white;
  background-color: rgb(129, 114, 105);
`;
const HowItWorksTitle = styled.h5`
  font-size: 60px;
`;
const HowItWorksDescription = styled.h6`
  width: 80%;
  padding: 20px 60px;
`;
const HowItWorksList = styled.ul`
  padding: 20px 60px;
`;
const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
`;
const HowItWorksSubTitle = styled.span`
  font-size: 24px;
`;

const AdviceOptions = styled.div`
  background-color: white;
  width: 100%;
  color: rgb(129, 114, 105);
  display: flex;
  flex-direction:column;
  align-items: center;
  padding:5% 0;
`;
const SectionAdviceTitle = styled.h1`font-size:60px;padding:0 0 20px 0;`;

const OptionsList = styled.div`display:flex;flex-direction:column; `;
const OptionWrapper = styled.div`padding:20px 0 ;`;
const Option = styled.div`cursor:pointer; width:70%; margin:0 auto; padding: 20px 50px;  border-radius: 40px; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); `;
const OptionDescription = styled.span`font-size:20px;font-weight:bold;`;
const SubsectionList = styled.ul`width:60%;margin:0 auto; padding-top:20px; font-size:18px;`
const Subsection = styled.li``


const PricingSection = styled.div`background-color:white; color:white; display:flex; align-items:center;background-image:url(${InteriorImg});background-size:cover; ;width:calc(70% + 100px); padding:0px 0px;margin:0 auto; `
const PricingWrapper = styled.div`display:flex; flex-direction:column; align-items:center; justify-content:center;  margin:0 auto; height:500px;text-align:center;`
const PricingOverlay = styled.div`width:100%; height:100%; background-color:rgba(129, 114, 105, 0.9)`
const PricingTitle = styled.h1`padding:20px 0;width:60%; color:#eebd56;`
const PricingText = styled.span` width:60% ; font-size:18px; ;padding:5px 0 `
const PricingButton = styled.a`margin-top:40px;padding:10px 25px; background-color:white; border:none; border-radius:30px;font-weight:700; color:rgb(129, 114, 105);text-decoration:none;
&:hover{background-color:#eebd56; color : white;cursor:pointer; transition:0.5s}
`



const PurchasingAdvice:React.FC = () => {
const [choosenOption, setChoosenOption] = useState<number>(0)

  const OnlineOption = () => {
    return (
      <SubsectionList>
        <Subsection><strong>Porady </strong>dotyczące marek i konkretnych produktów, propozycje miejsc zakupu.</Subsection>
        <Subsection><strong>Porównania cenowe </strong> na podstawie ofert ze sklepów internetowych i stacjonarnych.</Subsection>
        <Subsection><strong>Zestawienia ofertowe </strong> z propozycjami do wyboru, linki do stron i katalogów, zdjęcia z opisem podstawowych parametrów.</Subsection>
        <Subsection><strong>Pośrednictwo w zakupie </strong> i finalizacji transakcji.</Subsection>
      </SubsectionList>
    );
  };
  
  const PersonalOption = () => {
    return (
      <SubsectionList>
        <Subsection><strong>Spotkanie wstępne i wizyty </strong> w rekomendowanych sklepach stacjonarnych oraz salonach wyposażenia wnętrz.</Subsection>
        <Subsection><strong>Propozycje konkretnych produktów </strong> pomoc w wyborze wykończenia na podstawie katalogów, wzorników, próbek oraz gotowych aranżacji ekspozycyjnych.</Subsection>
        <Subsection><strong>Pomoc </strong> w uzyskaniu wszystkich informacji dotyczących m.in. szczegółów technicznych, cen i warunków handlowych, kosztów dostawy i montażu, gwarancji.</Subsection>
        <Subsection><strong>Raport pisemny po spotkaniu </strong> z zestawieniem proponowanych lub wybranych produktów, zawierający informacje o produkcie, cenie i miejscu sprzedaży</Subsection>
        <Subsection><strong>Rzuty funcjononalne, widoki ścian </strong> Rzuty funcjononalne, widoki ścian.</Subsection>
        
      </SubsectionList>
    );
  };
  
  const ComplexOption = () => {
    return (
      <SubsectionList>
        <Subsection><strong>Doradztwo </strong> i bezpośrednie spotkania i wizyty w sklepach, pozyskiwanie wszelkich niezbędnych informacji lub współpraca on-line.</Subsection>
        <Subsection><strong>Moodboards </strong> z aranżacją materiałowo- kolorystyczną, wizualizacje 3D.</Subsection>
        <Subsection><strong>Rzuty i widoki ścian </strong> z rozmieszczeniem funkcjonalnym wyposażenia, wyliczenia powierzchni i ilości do wycen kosztorysowych.</Subsection>
        <Subsection><strong>Zestawienie ofertowe </strong> z propozycjami konkretnych produktów do wyboru, linki do stron i katalogów, zdjęcia z opisem podstawowych parametrów.</Subsection>
        <Subsection><strong>Harmonogram realizacji działań i kosztorys </strong> uwzględniający ustalony budżet.</Subsection>
        <Subsection><strong>Pomoc w finalizacji transakcji zakupowych </strong> wsparcie w negocjacjach z dostawcami i wykonawcami.</Subsection>
        <Subsection><strong>Organizacja dostawy zamówień </strong> transportu, wniesienia, rozpakowania i montażu na miejscu inwestycji.</Subsection>
        <Subsection><strong>Nadzór autorski nad realizacją </strong> kontrola nad dostawami i montażami.</Subsection>
      </SubsectionList>
    );
  };

  return (
    <PageWrapper>
      <HeaderAdvices>
        <Overlay>
          <Navbar />
          <Title>Doradztwo Zakupowe</Title>
        </Overlay>
      </HeaderAdvices>
      <PurchasingAdviceDescription>
        <DescriptionImageWrapper>
          <DescriptionImage src={AdviceImg}></DescriptionImage>
        </DescriptionImageWrapper>
        <TextWrapper>
          <DescriptionTitle>
            Chcesz oryginalnie urządzić wnętrze, ale nie wiesz gdzie szukać
            odpowiednich mebli i sprzętów?
          </DescriptionTitle>
          <DescriptionText>
            Jeśli nie przepadasz za zakupami, masz mało czasu lub przytłacza Cię
            ilość ofert – skorzystaj z usługi SHOPPING CONCIERGE. Doradztwo
            zakupowe to indywidualne wsparcie w zakresie działań związanych z
            wyposażeniem oraz dekoracją wnętrz.
          </DescriptionText>
          <DescriptionText>
            {" "}
            Nie trać czasu i energii na samodzielne poszukiwania mebli czy
            dodatków – skorzystaj z naszego doświadczenia, eksperckiej wiedzy
            oraz szerokiej bazy kontaktów z producentami, dostawcami i
            wykonawcami.{" "}
          </DescriptionText>
          <DescriptionText>
            {" "}
            Doradztwo zakupowe pozwoli Ci na szybką metamorfozę wnętrz, nadając
            im nowocześniejszy wygląd i niepowtarzalny charakter.
          </DescriptionText>
        </TextWrapper>
      </PurchasingAdviceDescription>
      <HowItWorksSection>
        <HowItWorksTitle>Na Czym To polega?</HowItWorksTitle>
        <HowItWorksDescription>
          <HowItWorksSubTitle>
            Doradztwo zakupowe może być elementem uzupełniającym projekt lub
            stanowić niezależną usługę. Pomogę Ci przy wyborze pojedynczych
            akcesoriów, modyfikacji istniejącego umeblowania oraz kompleksowym
            wyposażaniu całego wnętrza.
          </HowItWorksSubTitle>
          <HowItWorksList>
            <ListItem>
              Otrzymasz propozycje doskonałych jakościowo produktów i
              materiałów, zgodnych z Twoim stylem oraz estetyka przestrzeni.
            </ListItem>
            <ListItem>
              Dzięki wieloletniemu doświadczeniu handlowemu i szerokiej sieci
              kontaktów, wynegocjuję dla Ciebie niższe ceny.
            </ListItem>
            <ListItem>
              Całościowo zorganizuję proces zakupowy – od analizy potrzeb, aż po
              finalne urządzenie wnętrza.
            </ListItem>
            <ListItem>
              Szybko dokonasz trafnych wyborów, utrzymasz kontrolę nad wydatkami
              i zaoszczędzisz cenny czas.
            </ListItem>
          </HowItWorksList>
        </HowItWorksDescription>
      </HowItWorksSection>
      <AdviceOptions>
        <SectionAdviceTitle>
          Wybierz doradztwo w wygodnej formie
        </SectionAdviceTitle>
        <OptionsList>
          <OptionWrapper>
            <Option onClick={()=>{if(choosenOption!==1){setChoosenOption(1)} else {setChoosenOption(0)}}}><OptionDescription>DORADZTWO ON-LINE - Konsultacja I doradztwo dotyczące mebli, artykułów wyposażenia wnętrz, dekoracji, dzieł sztuki, realizowane drogą drogą elektroniczną.</OptionDescription></Option>
            {choosenOption == 1 ? <OnlineOption/> : null}
          </OptionWrapper>
          <OptionWrapper>
            <Option onClick={()=>{if(choosenOption!==2){setChoosenOption(2)} else {setChoosenOption(0)}}}><OptionDescription>PERSONALNA ASYSTA - Konsultacja I doradztwo dotyczące mebli, wyposażenia oraz artykułów dekoracyjnych, realizowane podczas wspólnych wizyt w sklepach stacjonarnych.</OptionDescription>
           </Option> {choosenOption == 2 ? <PersonalOption/> : null}
          </OptionWrapper>
          <OptionWrapper>
            <Option onClick={()=>{if(choosenOption!==3){setChoosenOption(3)} else {setChoosenOption(0)}}}><OptionDescription>KOMPLEKSOWE DORADZTWO - Pełna obsługa zakupowa całego procesu (konsultacje, rysunki pomocnicze, kosztorys, realizacja), zgodnie z ustalonym zakresem działań.</OptionDescription></Option>
            {choosenOption == 3 ? <ComplexOption/> : null}
          </OptionWrapper>
        </OptionsList>
      </AdviceOptions>
      <PricingSection>   <PricingOverlay>
<PricingWrapper>
 
  <PricingTitle>Ile kosztuje doradztwo zakupowe?</PricingTitle>
  <PricingText>Konsultacje on-line obejmują m.in. porady, porównania cenowe i pośrednictwo w transakcjach.</PricingText>
  <PricingText>Personalna asysta zapewnia wsparcie podczas sklepowych wizyt, a kompleksowe doradztwo to opieka nad sprawnym przebiegiem całego procesu.</PricingText>
  <PricingText>Cena ostateczna zależy od zakresu usługi doradztwa zakupowego, ilości produktów i spotkań oraz ich lokalizacji.</PricingText>
<PricingButton href="/contact">Skontaktuj się ze mną i poproś o wycenę</PricingButton>

</PricingWrapper></PricingOverlay>
      </PricingSection>
    </PageWrapper>
  );
};

export default PurchasingAdvice;
