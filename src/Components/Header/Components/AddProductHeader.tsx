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
  function postProduct(data: any) {
    axios({
      method: "POST",
      url: `http://localhost:8080/scandiwebPHP/insert/${addCateogry}.php`,
      data: data,
    }).then(() => {
      return true;
    });
  }

  return (
    <Style.Container id={"addproductheaders"}>
      <Link to={"/"}>
        <Button
          form={"product_form"}
          title="Save"
          onClick={(e: any) => {
            // e.preventDefault();
            postProduct(addProduct);
            fetchProduct();
            // navigate("/");
          }}
        />
      </Link>
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
