"use client";

import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { submitForm } from "../lib/submitForm";
import { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const timeoutRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      // Clear any existing timeouts
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const result = await submitForm(data);

      if (!result.valid) {
        setErrorMessage(result.message || "Invalid phone number");
        timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
        return;
      }

      // Show success state
      setIsSuccess(true);

      // Close modal after 2 seconds
      timeoutRef.current = setTimeout(() => {
        reset();
        onClose();
        setIsSuccess(false);
      }, 4000);
    } catch (error) {
      setErrorMessage("Failed to submit form");
      timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl sm:max-w-lg"
        >
          {/* Error Message Toast */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-20"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <div className="mt-1 text-sm text-red-700">
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setErrorMessage(null)}
                    className="ml-auto -mx-1.5 -my-1.5 text-red-500 hover:text-red-700"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
              <p className="text-sm text-gray-500 mt-1">
                We&apos;ll get back to you as soon as possible
              </p>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                      }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <svg
                        className="w-12 h-12 text-green-500"
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
                      style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1)" }}
                    />
                  </div>
                </div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-gray-800 mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600"
                >
                  We've received your message and will get back to you soon.
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 2, ease: "linear" }}
                  className="mt-8 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                />
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border ${
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
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="custom-phone-input">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Type your message here..."
                    {...register("message")}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cursor-pointer px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
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
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
