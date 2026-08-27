import * as yup from "yup";
export const bookingSchema = yup.object({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(2, "Enter at least 2 letters"),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
});
