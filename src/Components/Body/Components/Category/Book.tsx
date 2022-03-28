import * as React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../services/productSlice";

function Book() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Weight" className="col-sm-2  col-form-label">
          Weight
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Weight"
            className="form-control"
            id="weight"
            placeholder="Weight"
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

export default Book;
