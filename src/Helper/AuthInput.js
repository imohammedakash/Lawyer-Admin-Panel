import { Field } from "formik";
import React from "react";

const AuthInput = ({ label = "label", Icon, required = false, ...rest }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center flex-1">
      <label htmlFor="item" className="">
        {label} {required ? <span className="text-red-500">*</span> : ""}
      </label>
      <div className="flex items-center justify-center rounded-full gap-4 border py-3 px-4 w-full">
        {Icon && <Icon className="text-2xl text-[#000000c1]" />}
        <Field
          {...rest}
          className="w-full outline-none border-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default AuthInput;
