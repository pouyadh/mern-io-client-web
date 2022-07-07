import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "At least 4 character")
    .max(50, "Maximum 50 character")
    .required("Required"),
  password: Yup.string()
    .min(8, "At least 8 character")
    .max(50, "Maximum 50 character")
    .required("Required"),
});

export default validationSchema;
