import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  api,
  fetchProduct,
  productSelector,
} from "../../../services/productSlice";
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
    axios({
      url: `http://localhost:8080/scandiwebPHP/delete/MassDelete.php`,
      method: "DELETE",
      data: { id: idx },
    }).then(() => {
      fetchProduct();
      navigate("/");
      return true;
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
