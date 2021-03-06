import React from "react";
import TopHeader from "./Components/TopHeader/TopHeader";
import Header from "./Components/Header/Header";
import ProductsList from "./Components/ProductsList/ProductsList";
import Sales from "./Components/Sales/Sales";
import Picture from "./Components/Picture/Picture";
import Separator from "./Components/Separator/Separator";
import Items from "./Components/Items/Items";
import Models from "./Components/Models/Models";
import Brands from "./Components/Brands/Brands";
import Payments from "./Components/Payments/Payments";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <ProductsList />
      <Sales />
      <Picture />
      <Separator />
      <Items />
      <Models />
      <Brands />
      <Payments />
      <Footer />
    </>
  );
};

export default App;
