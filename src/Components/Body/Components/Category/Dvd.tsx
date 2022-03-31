import * as React from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Product } from "../../../../services/Product.model";

function Dvd() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = useFormContext<Product>();
  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Size" className="col-sm-2  col-form-label">
          Size
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="size"
            step={0.1}
            min={0.1}
            {...register("Size", { required: true })}
          />
          {errors.Size && <p id="error-input">Size is required</p>}
        </div>
      </div>
    </>
  );
}

export default Dvd;
