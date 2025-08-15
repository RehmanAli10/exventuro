"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import { submitForm } from "@/app/lib/submitForm";
import ToastMessage from "../ToastMessage";

const ContactForm = ({ onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
    watch,
  } = useForm();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const onSubmit = async (data) => {
    try {
      // Validate dates
      const startDate = new Date(data.travelStartDate);
      const endDate = new Date(data.travelEndDate);

      // Allow same-day trips
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

      const result = await submitForm(data);

      if (!result.valid) {
        setToast({
          type: "error",
          message: result.message || "Invalid phone number",
        });
        return;
      }

      setIsSuccess(true);
      // Don't reset immediately - let user see success state
    } catch (error) {
      setToast({
        type: "error",
        message: "Failed to submit form",
      });
    }
  };

  return (
    <>
      {/* Error Message Toast */}
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
              className="text-center py-4 sm:py-6 md:py-8"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></motion.path>
                    </svg>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      delay: 0.5,
                      duration: 0.6,
                      times: [0, 0.5, 1],
                    }}
                    className="absolute inset-0 rounded-full border-4 border-green-200 opacity-0"
                  />
                </div>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
              >
                Message Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base text-gray-600"
              >
                We&apos;ve received your message and will get back to you soon.
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 2, ease: "linear" }}
                className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              />
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
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <PhoneInput
                      country={"ca"}
                      value={field.value}
                      onChange={field.onChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                      }}
                      inputStyle={{
                        width: "100%",
                        color: "black",
                        height: "3rem",
                        borderRadius: "0.75rem",
                        border: errors.phone
                          ? "1px solid red"
                          : "1px solid #ccc",
                      }}
                      containerStyle={{
                        color: "black",
                      }}
                      dropdownStyle={{
                        color: "black",
                        backgroundColor: "white",
                      }}
                      buttonStyle={{
                        backgroundColor: "white",
                      }}
                      dropdownClass="force-black-text"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Travel Start Date <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="travelStartDate"
                    control={control}
                    rules={{ required: "Start date is required" }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        minDate={today}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select start date"
                        className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    )}
                  />
                  {errors.travelStartDate && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.travelStartDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Travel End Date <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="travelEndDate"
                    control={control}
                    rules={{ required: "End date is required" }}
                    render={({ field }) => {
                      const startDate = watch("travelStartDate") || tomorrow;
                      return (
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          minDate={startDate}
                          dateFormat="MM/dd/yyyy"
                          placeholderText="Select end date"
                          className="w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      );
                    }}
                  />
                  {errors.travelEndDate && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.travelEndDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Trip Type <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="package"
                      value="package"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      {...register("tripType", {
                        required: "Please select a trip type",
                      })}
                    />
                    <label
                      htmlFor="package"
                      className="ml-3 text-xs sm:text-sm text-gray-700"
                    >
                      Planned Itinerary Package
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="custom"
                      value="custom"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      {...register("tripType")}
                    />
                    <label
                      htmlFor="custom"
                      className="ml-3 text-xs sm:text-sm text-gray-700"
                    >
                      Custom Trip
                    </label>
                  </div>
                </div>
                {errors.tripType && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.tripType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full text-black px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Type your message here..."
                  {...register("message")}
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-all relative overflow-hidden ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 shadow-md hover:shadow-lg"
                  }`}
                >
                  {!isSubmitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 opacity-100 hover:opacity-100 transition-opacity duration-300"></span>
                  )}

                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
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
