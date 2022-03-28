import * as React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../services/productSlice";

function Dvd() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Size" className="col-sm-2  col-form-label">
          Size
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            step={0.1}
            min={0.1}
            name="Size"
            className="form-control"
            id="size"
            placeholder="Size"
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

export default Dvd;
