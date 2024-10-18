import React from "react";
import FormDiscount from "../../components/FormDiscount";
import MainBanner from "../../components/MainBanner";
import CategoriesMainSection from "../../components/CategoriesMainSection";
import Sale from "../../components/Sale";
import CategoriesPage from "../CategoriesPage";

const MainPage = ({ isLoading }) => {
  return (
    <div>
      <MainBanner />
      <CategoriesMainSection isLoading={isLoading} />
      <CategoriesPage/>
      <FormDiscount />
      <Sale />
    </div>
  );
};

export default MainPage;
