import React from "react";
import BenefitsCorner from "../../components/benefitsCorner/BenefitsCorner";
import BestSelling from "../../components/bestSelling/BestSelling";
import { Main } from "../../components/main/Main";
import Advices from "../../components/advices/Advices";

const Home = () => {
  return (
    <div>
      <Main />
      <BenefitsCorner />
      <BestSelling />
      <Advices />
    </div>
  );
};

export default Home;
