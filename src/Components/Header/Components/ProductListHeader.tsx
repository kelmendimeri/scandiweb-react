import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct, productSelector } from "../../../services/productSlice";
import Button from "./Button";

function ProductListHeader() {
  const { deleteProduct } = useSelector(productSelector);
  const selectedData: number[] = [];
  deleteProduct.length > 0 &&
    deleteProduct.map((item: any) => {
      selectedData.push(item);
    });
  const navigate = useNavigate();
  function removeProduct(idx: number) {
    fetch("http://localhost:8080/scandiwebPHP/Products/CRUD.php", {
      method: "DELETE",
      body: JSON.stringify({ id: idx }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        res.status === 200 && fetchProduct();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <Style.Container id={"addproductheaders"}>
      <Link to={"/add-product"}>
        <Button title="ADD" />
      </Link>
      <Button
        title={"MASS DELETE"}
        onClick={() => {
          selectedData.length > 0
            ? selectedData.map((item: number) => {
                removeProduct(item);
                window.location.reload();
              })
            : alert("Check an prdouct item before clicking delete button");

          fetchProduct();
        }}
      />
    </Style.Container>
  );
}

export default ProductListHeader;

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
