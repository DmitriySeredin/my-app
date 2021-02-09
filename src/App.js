import React from "react";
import TopHeader from "./Components/TopHeader/TopHeader";
import Header from "./Components/Header/Header";
import ProductsList from "./Components/ProductsList/ProductsList";
import Sales from "./Components/Sales/Sales";
import Picture from "./Components/Picture/Picture";

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <ProductsList />
      <Sales />
      <Picture />
    </>
  );
};

export default App;
