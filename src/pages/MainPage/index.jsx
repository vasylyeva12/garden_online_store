import React from "react";
import FormDiscount from "../../components/FormDiscount";
import MainBanner from "../../components/MainBanner";
import CategoriesMainSection from "../../components/CategoriesMainSection";
import Sale from "../../components/Sale";

const MainPage = ({ isLoading }) => {
  return (
    <div>
      <MainBanner />
      <CategoriesMainSection isLoading={isLoading} />
      <FormDiscount />
      <Sale />
    </div>
  );
};

export default MainPage;
