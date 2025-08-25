"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import { submitForm } from "@/app/lib/submitForm";
import ToastMessage from "../ToastMessage";
import FormInput from "@/app/components/sharedUi/FormInput";

const ContactForm = ({ onClose, formType, packageDetails = {} }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    watch,
  } = useForm();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const onSubmit = async (data) => {
    try {
      const startDate = new Date(data.travelStartDate);
      const endDate = new Date(data.travelEndDate);

      if (
        endDate < startDate &&
        endDate.toDateString() !== startDate.toDateString()
      ) {
        setToast({
          type: "error",
          message: "End date must be after start date",
        });
        return;
      }

      if (data.passengers && packageDetails.price) {
        data.price = packageDetails.price[data.passengers];
      }

      const result = await submitForm(data);

      if (!result.valid) {
        setToast({
          type: "error",
          message: result.message || "Invalid phone number",
        });
        return;
      }

      setIsSuccess(true);
    } catch (error) {
      setToast({ type: "error", message: "Failed to submit form" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {toast && (
          <ToastMessage
            type={toast.type}
            message={toast.message}
            onDismiss={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <div className="p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Message Sent!
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We&apos;ve received your message and will get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormInput
                label="Name"
                name="name"
                placeholder="Your name"
                register={register}
                rules={{ required: "Name is required" }}
                errors={errors}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                register={register}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                errors={errors}
              />
              <FormInput
                label="Phone Number"
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                errors={errors}
              >
                <PhoneInput
                  country={"ca"}
                  inputProps={{ name: "phone", required: true }}
                  inputStyle={{
                    width: "100%",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    color: "#808080",
                  }}
                  buttonStyle={{ backgroundColor: "white" }}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#808080"
                />
              </FormInput>

              {Object.keys(packageDetails).length > 0 && (
                <div className="space-y-4">
                  {/* <FormInput
                    label="Package Name"
                    name="packageName"
                    register={register}
                    errors={errors}
                    isDisable={true}
                  >
                    <input
                      type="text"
                      value={packageDetails.title}
                      disabled
                      className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </FormInput> */}

                  <FormInput
                    label="Package Name"
                    name="packageName"
                    register={register}
                    errors={errors}
                    isDisable={true}
                    placeholder={packageDetails.title}
                    value={packageDetails.title}
                    // rules={{ required: true }}
                  />

                  <FormInput
                    label="Select Passengers"
                    name="passengers"
                    control={control}
                    rules={{ required: "Please select passenger group" }}
                    errors={errors}
                  >
                    {(field) => (
                      <select
                        {...field}
                        className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select passengers</option>
                        <option value="smallGroup">1–3 Passengers</option>
                        <option value="largeGroup">4–6 Passengers</option>
                      </select>
                    )}
                  </FormInput>

                  {watch("passengers") && (
                    <p className="text-sm font-medium text-gray-700">
                      Price:{" "}
                      <span className="font-semibold text-blue-600">
                        ${packageDetails.price[watch("passengers")]}
                      </span>
                    </p>
                  )}

                  {packageDetails.note && (
                    <p className="text-xs text-gray-500 italic">
                      {packageDetails.note}
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* <FormInput
                  label="Travel Start Date"
                  name="travelStartDate"
                  control={control}
                  rules={{ required: "Start date is required" }}
                  errors={errors}
                >
                  {(field) => (
                    <DatePicker
                      selected={field.value || null}
                      onChange={(date) => field.onChange(date)}
                      minDate={today}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Select start date"
                      className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  )}
                </FormInput> */}

                <FormInput
                  label="Travel Start Date"
                  name="travelStartDate"
                  control={control}
                  rules={{ required: "Start date is required" }}
                  errors={errors}
                >
                  {(field) => {
                    const minSelectable = new Date(
                      today.getTime() + 15 * 60 * 1000
                    );

                    return (
                      <DatePicker
                        selected={field.value || null}
                        onChange={(date) => field.onChange(date)}
                        minDate={today}
                        minTime={minSelectable}
                        maxTime={new Date().setHours(23, 59, 59)}
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="MM/dd/yyyy h:mm aa"
                        placeholderText="Select start date & time"
                        className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    );
                  }}
                </FormInput>

                {formType !== "booking" && (
                  <FormInput
                    label="Travel End Date"
                    name="travelEndDate"
                    control={control}
                    rules={{ required: "End date is required" }}
                    errors={errors}
                  >
                    {(field) => (
                      <DatePicker
                        selected={field.value || null}
                        onChange={(date) => field.onChange(date)}
                        minDate={watch("travelStartDate") || tomorrow}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select end date"
                        className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    )}
                  </FormInput>
                )}
              </div>

              {formType !== "booking" && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Trip Type <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="package"
                        {...register("tripType", {
                          required: "Please select a trip type",
                        })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Planned Itinerary Package
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="custom"
                        {...register("tripType")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Custom Trip
                      </span>
                    </label>

                    {watch("tripType") === "custom" && (
                      <FormInput
                        label="To"
                        name="to"
                        placeholder="Enter your destination"
                        register={register}
                        rules={{
                          required: "Destination is required for custom trips",
                        }}
                        errors={errors}
                      />
                    )}
                  </div>
                  {errors.tripType && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.tripType.message}
                    </p>
                  )}
                </div>
              )}

              <FormInput
                label="Message"
                name="message"
                isTextArea
                placeholder="Type your message here..."
                register={register}
                errors={errors}
              />
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 shadow-md hover:shadow-lg disabled:bg-blue-400 relative"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContactForm;
