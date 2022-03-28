import * as React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../services/productSlice";

function Furniture() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Height" className="col-sm-2  col-form-label">
          Height
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Height"
            className="form-control"
            id="height"
            placeholder="Height"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Width" className="col-sm-2  col-form-label">
          Width
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Width"
            className="form-control"
            id="width"
            placeholder="Width"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Length" className="col-sm-2  col-form-label">
          Length
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Length"
            className="form-control"
            id="length"
            placeholder="Length"
            required
            onChange={(e: any) => {
              dispatch(addProduct({ [e.target.name]: e.target.value }));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Furniture;
