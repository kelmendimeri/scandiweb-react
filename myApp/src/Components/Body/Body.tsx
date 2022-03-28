import * as React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductlList";

function Body() {
  return (
    <Style.Container>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Style.Container>
  );
}

export default Body;

const Style = {
  Container: styled.main`
    padding-top: 100px;
    padding-bottom: 25px;
  `,
};
