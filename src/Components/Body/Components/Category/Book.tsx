import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Product } from "../../../../services/Product.model";

function Book() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Product>();

  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="Weight" className="col-sm-2  col-form-label">
          Weight
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="weight"
            step={0.01}
            min={0.01}
            {...register("Weight", { required: true })}
          />
          {errors.Weight && <p id="error-input">Weight is required</p>}
        </div>
      </div>
    </>
  );
}

export default Book;
