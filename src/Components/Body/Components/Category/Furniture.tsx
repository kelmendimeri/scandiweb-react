import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Product } from "../../../../services/Product.model";

function Furniture() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Product>();
  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Height" className="col-sm-2  col-form-label">
          Height
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="height"
            step={0.1}
            min={0.1}
            {...register("Height", { required: true })}
          />
          {errors.Height && <p id="error-input">Height is required</p>}
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Width" className="col-sm-2  col-form-label">
          Width
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="width"
            step={0.01}
            min={0.01}
            {...register("Width", { required: true })}
          />
          {errors.Width && <p id="error-input">Height is required</p>}
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="Length" className="col-sm-2  col-form-label">
          Length
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="length"
            step={0.1}
            min={0.1}
            {...register("Length", { required: true })}
          />
          {errors.Length && <p id="error-input">Length is required</p>}
        </div>
      </div>
    </>
  );
}

export default Furniture;
