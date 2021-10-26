import * as yup from "yup";

export const schema = yup
  .object({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    email: yup.string().email('Enter the valid email address').required("This field is required"),
    avatar: yup.string().url().required("This field is required")
  })
  .required();
