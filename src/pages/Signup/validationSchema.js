import * as Yup from "yup";
const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "At least 4 character")
    .max(50, "Maximum 50 character")
    .required("Required"),
  email: Yup.string().email("Should be valid").required("Required"),
  password: Yup.string()
    .min(8, "At least 8 character")
    .max(50, "Maximum 50 character")
    .required("Required"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default validationSchema;
