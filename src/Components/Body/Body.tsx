import * as React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductlList";

function Body() {
  return (
    <Style.Container className="container">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Style.Container>
  );
}

export default Body;

const Style = {
  Container: styled.main`
    // padding-top: 70px;
    // padding-bottom: 50px;
  `,
};
