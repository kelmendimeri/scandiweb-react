import * as React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AddProductListHeader from "./Components/AddProductHeader";
import ProductListHeader from "./Components/ProductListHeader";
function Header() {
  return (
    <Style.Container className="container navbar fixed-top navbar-expand-sm col-12 bg-white">
      <div className="col-sm-9">
        <h1>ProductList</h1>
      </div>
      <div className="container-fluid col-sm-3">
        <Routes>
          <Route path="/" element={<ProductListHeader />}></Route>
          <Route path="/add-product" element={<AddProductListHeader />}></Route>
        </Routes>
      </div>
    </Style.Container>
  );
}

export default Header;

const Style = {
  Container: styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
  `,
};
