import * as Yup from "yup";

const validationSchema = Yup.object({
  avatarURL: Yup.string(),
  name: Yup.string().max(50, "Maximum 50 character").required("Required"),
  description: Yup.string().max(100, "Maximum 100 character"),
  members: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least 1 member")
    .required("required"),
});

export default validationSchema;
