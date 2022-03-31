import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../../services/Product.model";
import Button from "./Button";

function AddProductList() {
  const method = useForm<Product>();

  return (
    <Style.Container id={"addproductheaders"}>
      <Button form={"product_form"} title="Save" />

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
