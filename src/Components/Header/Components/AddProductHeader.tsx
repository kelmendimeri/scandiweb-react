import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct, productSelector } from "../../../services/productSlice";

import Button from "./Button";

function AddProductList() {
  const { addCateogry } = useSelector(productSelector);
  const { addProduct } = useSelector(productSelector);
  const navigate = useNavigate();
  function postProduct(data: any[]) {
    axios({
      method: "POST",
      url: `http://localhost:8080/scandiwebPHP/insert/${addCateogry}.php`,
      data: data,
    });
  }
  return (
    <Style.Container id={"addproductheaders"}>
      <Button
        form={"product_form"}
        title="Save"
        onClick={(e: any) => {
          postProduct(addProduct);
        }}
      />

      <Link to={"/"}>
        <Button title="Cancel" />
      </Link>
    </Style.Container>
  );
}

export default AddProductList;

const Style = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: left;
  `,
  NavItem: styled.div``,
};
