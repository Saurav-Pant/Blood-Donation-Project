"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorMessage, FastField, Form, Formik, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";

import statesData from "../../Content/State.json";

const stateNames = statesData.states;

const isCheckedErrorMessage = "Please check the box to confirm";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
  age: Yup.number().required("Age is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  gender: Yup.string().required("Gender is required"),
  isChecked: Yup.boolean().required(isCheckedErrorMessage),
});

type FormValues = Yup.InferType<typeof formSchema>;

const formInitialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bloodGroup: "",
  age: 0,
  address: "",
  state: "",
  gender: "",
  isChecked: false,
};

type State = {
  isFormBusy: boolean;
  submitError: string | null;
};

const DonorForm = () => {
  const [states, setStates] = useState<State>({
    isFormBusy: false,
    submitError: null,
  });

  const { isFormBusy, submitError } = states;

  const router = useRouter();

  const validator = (values: FormValues) => {
    if (values.age <= 0) {
      return { age: "Age must be greater than 0" };
    }
  };

  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ): Promise<void> => {
    setStates({
      isFormBusy: true,
      submitError: null,
    });
    try {
      const { isChecked, ...dataToSend } = values;

      if (!isChecked) {
        helpers.setFieldError("isChecked", isCheckedErrorMessage);
        return;
      }

      const response = await fetch("/api/DonorForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok || response.status !== 200) {
        throw new Error("Failed to submit data");
      }
      router.push("/");
    } catch (error) {
      const errorMessage = "Unable to submit data";
      setStates((cs) => ({ ...cs, submitError: errorMessage }));
      console.error("Error submitting data:", error);
    } finally {
      setStates((cs) => ({ ...cs, isFormBusy: false }));
    }
  };

  return (
    <motion.div
      className="mx-auto max-w-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="border-1 p-8 shadow">
        <div className="mb-[2vh] mt-4 flex h-[11vh] w-full items-center rounded bg-gradient-to-r from-red-900 via-red-900 to-red-800">
          <h1 className="ml-4 text-2xl font-bold text-white">
            Register as donor
          </h1>
        </div>
        <Formik
          initialValues={formInitialValues}
          validate={validator}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form className="space-y-5">
              <FastField name="firstName" placeholder="First">
                {({ field }) => (
                  <div>
                    <label htmlFor="firstName" className="mb-[2vw] mt-2 w-full">
                      <h1>First Name {compulsory}</h1>
                    </label>
                    <input
                      {...field}
                      className="h-10 w-full flex-grow border-2 border-gray-300 pl-2 hover:border-red-800"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="firstName"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="lastName" placeholder="Last">
                {({ field }) => (
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-[2vw] mr-1 mt-2 w-full"
                    >
                      Last Name {compulsory}
                    </label>
                    <input
                      {...field}
                      className=" h-10 w-full flex-grow border-2 border-gray-300 pl-2 hover:border-red-800"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="lastName"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="phone" placeholder="Phone Number">
                {({ field }) => (
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-[2vw] mr-1 mt-2 w-full"
                    >
                      Phone {compulsory}
                    </label>
                    <input
                      {...field}
                      type="tel"
                      className="h-10 w-full flex-grow border-2 border-gray-300 pl-2 hover:border-red-800"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="phone"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="email" placeholder="Email">
                {({ field }) => (
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-[2vw] mr-1 mt-2 w-full"
                    >
                      Email {compulsory}
                    </label>
                    <input
                      {...field}
                      type="email"
                      className="h-10 w-full flex-grow border-2 border-gray-300 pl-2 hover:border-red-800"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="email"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="bloodGroup" placeholder="Blood Group">
                {({ field }) => (
                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="mb-[2vw] mr-1 mt-2 w-full"
                    >
                      Blood Group {compulsory}
                    </label>
                    <select
                      {...field}
                      className="h-10 w-full  border-2 border-gray-300  pl-2 hover:border-red-600 "
                    >
                      <option value="">-- Select --</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="bloodGroup"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="age" placeholder="Age">
                {({ field }) => (
                  <div>
                    <label
                      htmlFor="age"
                      className=" mb-[2vw] mr-1 mt-2 w-full "
                    >
                      Age {compulsory}
                    </label>
                    <input
                      {...field}
                      className="h-10 w-full border-2 border-gray-300 pl-2 hover:border-red-600"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="age"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="address" placeholder="Address">
                {({ field }) => (
                  <div>
                    <label htmlFor="address" className=" mr-[2vw] mt-2 w-full">
                      Address {compulsory}
                    </label>
                    <input
                      {...field}
                      className="h-[12vh] w-full border-2 border-gray-300 pl-2 hover:border-red-800"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-600 "
                      name="address"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="state" placeholder="State">
                {({ field }) => (
                  <div>
                    <label htmlFor="state" className="mt-2 w-full">
                      State {compulsory}
                    </label>
                    <select
                      {...field}
                      className="h-10 w-full flex-grow border-2 border-gray-300 pl-2 hover:border-red-800"
                    >
                      <option value="">-- Choose State --</option>
                      {stateNames.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      component="div"
                      className="text-red-600 "
                      name="state"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="gender">
                {({ field }) => (
                  <div>
                    <div className="flex items-center gap-4">
                      <h1 className="w-24">Gender {compulsory}</h1>

                      <label>
                        <input {...field} type="radio" value="male" /> Male
                      </label>
                      <label>
                        <input {...field} type="radio" value="female" /> Female
                      </label>
                      <label>
                        <input {...field} type="radio" value="other" /> Others
                      </label>
                    </div>
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="gender"
                    />
                  </div>
                )}
              </FastField>

              <FastField name="isChecked">
                {({ field }) => (
                  <div className="pt-5">
                    <label>
                      <input {...field} type="checkbox" className="mr-6" />{" "}
                      <span className="font-bold">
                        All the details which are filled by me are right and
                        ethical.
                      </span>
                    </label>
                    <ErrorMessage
                      component="div"
                      className="text-red-600"
                      name="isChecked"
                    />
                  </div>
                )}
              </FastField>

              {submitError && (
                <div className="py-5 text-red-600">{submitError}</div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isFormBusy}
                  className="w-1/2 rounded bg-red-900 px-4 py-2 font-bold text-white hover:bg-red-800 max-lg:w-full"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

const compulsory = <span className="text-red-600">*</span>;

export default DonorForm;
