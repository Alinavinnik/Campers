"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import { PiWarningCircleLight } from "react-icons/pi";

import css from "./BookForm.module.css";
import { createBook } from "@/services/camperService";
import { bookingSchema } from "@/utils/shemaFormValidation";

type BookFormProps = {
  camperId: string;
};

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
};

export default function BookForm({ camperId }: BookFormProps) {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    setIsPending(true);

    try {
      await createBook(camperId, values);
      toast.success("Camper is successfully booked!");
      actions.resetForm();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css["form-header"]}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.subtitle}>
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={css["form-inputs"]}>
          <Field name="name">
            {({ field, meta }: FieldProps<string, FormValues>) => (
              <div className={css.inputWrapper}>
                <input
                  {...field}
                  type="text"
                  placeholder="Name*"
                  className={`${css.name} ${
                    meta.touched && meta.error ? css.inputError : ""
                  }`}
                />

                {meta.touched && meta.error && (
                  <PiWarningCircleLight className={css.errorIcon} />
                )}

                {meta.touched && meta.error && (
                  <span className={css.error}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>

          <Field name="email">
            {({ field, meta }: FieldProps<string, FormValues>) => (
              <div className={css.inputWrapper}>
                <input
                  {...field}
                  type="email"
                  placeholder="Email*"
                  className={`${css.email} ${
                    meta.touched && meta.error ? css.inputError : ""
                  }`}
                />

                {meta.touched && meta.error && (
                  <PiWarningCircleLight className={css.errorIcon} />
                )}

                {meta.touched && meta.error && (
                  <span className={css.error}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>
        </div>

        <button type="submit" className={css.button} disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </button>
      </Form>
    </Formik>
  );
}
