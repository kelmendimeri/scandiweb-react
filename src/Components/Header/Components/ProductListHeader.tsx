import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

  function removeProduct(idx: number) {
    axios({
      method: "DELETE",
      url: "https://juniortestkelmendimeri.000webhostapp.com/scandiwebPHP/delete/MassDelete.php",
      data: { id: idx },
    }).then(() => {
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
