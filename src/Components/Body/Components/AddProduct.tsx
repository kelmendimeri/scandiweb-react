import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import loadable from "@loadable/component";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addCateogry,
  productSelector,
} from "../../../services/productSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const [myComp, setMyComp] = useState("");
  const components = {
    AddBook: "Book",
    AddDvd: "Dvd",
    AddFurniture: "Furniture",
  };
  const AsyncPage = loadable(
    (props: any) => import(`./Category/${props.page}`)
  );
  const [myProduct, setMyProduct] = useState<any>({});

  return (
    <form className="col-sm-6" id="product_form">
      <div className="form-group row mb-2">
        <label htmlFor="SKU" className="col-sm-2  col-form-label">
          SKU
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            name="SKU"
            className="form-control"
            id="sku"
            placeholder="SKU"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            name="Name"
            className="form-control"
            id="name"
            placeholder="Name"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Price" className="col-sm-2 col-form-label">
          Price
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Price"
            className="form-control"
            id="price"
            placeholder="Price"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
      {/* select tag will unregister states object item if we change 
      change in the middle of entering values only the listed item.
      iterates object of functions(components) and depending on events' 
      value will render the value of MyComp useState */}
      <div className="col-mb-3 row">
        <label className="col-sm-2">Type Switcher</label>
        <select
          id={"productType"}
          className="col-sm-3"
          onChange={(event) => {
            Object.entries(components).map(([key, value]) => {
              return key === event.target.value && setMyComp(value);
            });

            dispatch(addCateogry(event.target.value));
          }}
        >
          <option value={""}>Switcher Type</option>
          {Object.keys(components).map((component) => {
            return (
              <option key={component} value={component}>
                {component}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div className="col-mb-3 row">
        {myComp && (
          <Suspense fallback={<h2>Loading...</h2>}>
            <AsyncPage page={myComp}></AsyncPage>
          </Suspense>
        )}
      </div>
    </form>
  );
}

export default AddProduct;

export function PostProduct() {
  axios({
    method: "POST",
    url: `http://localhost:8080/scandiwebPHP/insert/${addCateogry}.php`,
    data: { addProduct },
  }).then(() => {
    return true;
  });
}
