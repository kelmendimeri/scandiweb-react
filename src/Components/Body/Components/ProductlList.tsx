import React, { memo } from "react";
import {
  deleteProduct,
  fetchProduct,
  productSelector,
  setLoading,
} from "../../../services/productSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";

function ProductList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchProduct());
  }, [dispatch]);

  const { loading, error, products } = useSelector(productSelector);
  return (
    <Style.Container id="ProductList">
      <Style.Items>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong...</h2>}
        {products.length < 1 && <h2 style={{ color: "grey" }}>No data</h2>}
        {products.map(
          (
            product: {
              ID: number;
              SKU: string;
              Name: string;
              Price: number;
              Size: number;
              Weight: number;
              Height: number;
              Width: number;
              Length: number;
            },
            index: number
          ) => {
            return (
              <Style.Item key={index}>
                <Style.CheckBox>
                  <input
                    type={"checkbox"}
                    className={"delete-checkbox"}
                    id={`checkbox${product.ID}`}
                    onChange={(e: any) => {
                      dispatch(deleteProduct(product.ID));
                      $(`#checkbox${product.ID}`).prop("checked")
                        ? $(`#checkbox${product.ID}`).addClass(
                            "delete-checkbox"
                          )
                        : $(`#checkbox${product.ID}`).removeClass(
                            "delete-checkbox"
                          );
                    }}
                  />
                </Style.CheckBox>
                <Style.Text>{product.SKU}</Style.Text>
                <Style.Text>{product.Name}</Style.Text>
                <Style.Text>{product.Price} $</Style.Text>
                {product.Size && (
                  <Style.Text>Size: {product.Size} MB</Style.Text>
                )}
                {product.Weight && (
                  <Style.Text>Weight: {product.Weight} KG</Style.Text>
                )}
                {product.Height && product.Width && product.Length && (
                  <Style.Text>
                    Dimension: {product.Height}x{product.Width}x{product.Length}
                  </Style.Text>
                )}
              </Style.Item>
            );
          }
        )}
      </Style.Items>
    </Style.Container>
  );
}

export default React.memo(ProductList);

const Style = {
  Container: styled.div`
    padding-top: 100px;
    margin: 0 10px;
    padding-bottom: 70px;
  `,

  Items: styled.div`
    display: flex;
    flex-flow: row wrap;
    row-gap: 50px;
    column-gap: 50px;
    align-items: center;
  `,
  Item: styled.div`
    flex: 0 1 22%;
    border: 2px solid black;
    margin: 0;
    padding: 5px;
    height: 180px;
    align-items: center;
    justify-content: center;
  `,

  Text: styled.p`
    color: black;
    font-size: 12px;
    font-weight: bolder;
    margin: 0;
    padding: 1px;
    text-align: center;
  `,
  CheckBox: styled.div`
    display: flex;
    position: relative;
    top: 5px;
    left: 5px;
  `,
};
