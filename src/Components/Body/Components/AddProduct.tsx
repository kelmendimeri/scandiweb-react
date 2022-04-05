import React, { Suspense, useState } from "react";
import loadable from "@loadable/component";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { Product } from "../../../services/Product.model";
import { useNavigate } from "react-router-dom";
import { productSelector } from "../../../services/productSlice";
import { Console } from "console";

function AddProduct() {
  const dispatch = useDispatch();
  const [duplicateError, setDuplicateError] = useState(false);
  const { products } = useSelector(productSelector);
  const method = useForm<Product>();
  const [myComp, setMyComp] = useState("");
  const components = {
    Book: "Book",
    DVD: "Dvd",
    Furniture: "Furniture",
  };
  const AsyncPage = loadable(
    (props: any) => import(`./Category/${props.page}`)
  );
  const navigate = useNavigate();
  function onsubmit(data: any) {
    let duplicate = products.filter((product: any) => product.SKU === data.SKU);
    duplicate.length < 1
      ? fetch(`http://localhost:8080/scandiwebPHP/Products/${myComp}.php`, {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            setDuplicateError(false);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error:", error);
          })
      : setDuplicateError(true);
  }
  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onsubmit)}
        className="col-6"
        id="product_form"
        style={{ paddingTop: "100px", margin: "0 10px", paddingBottom: "70px" }}
      >
        <div className="form-group row mb-2">
          <label htmlFor="SKU" className="col-sm-2  col-form-label">
            SKU
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="sku"
              {...method.register("SKU", {
                required: true,
              })}
            />
            {duplicateError && (
              <p id="error-input">SKU exist in database, please rename it</p>
            )}
            {method.formState.errors.SKU && (
              <p id="error-input">SKU is required</p>
            )}
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="Name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="name"
              {...method.register("Name", { required: true })}
            />
            {method.formState.errors.Name && (
              <p id="error-input">Name is required</p>
            )}
          </div>
        </div>
        <div className="#product_form form-group row mb-2">
          <label htmlFor="Price" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              id="price"
              step={0.01}
              min={0.01}
              {...method.register("Price", { required: true })}
            />
            {method.formState.errors.Price && (
              <p id="error-input">Price is required</p>
            )}
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
            required
            onChange={(event) => {
              Object.entries(components).map(([key, value]) => {
                return key === event.target.value && setMyComp(value);
              });
              method.unregister("Weight");
              method.unregister("Size");
              method.unregister("Height");
              method.unregister("Width");
              method.unregister("Length");
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
    </FormProvider>
  );
}
export default AddProduct;
