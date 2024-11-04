import React from "react";
import FormDiscount from "../../components/FormDiscount";
import MainBanner from "../../components/MainBanner";
import CategoriesMainSection from "../../components/CategoriesMainSection";
import Sale from "../../components/Sale";
import SaleMainSection from "../../components/SaleMainSection";


const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <CategoriesMainSection  />   
      <FormDiscount />
      <SaleMainSection />
    </div>
  );
};

export default MainPage;
