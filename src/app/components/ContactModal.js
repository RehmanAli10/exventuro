// "use client";

// import { useForm, Controller } from "react-hook-form";
// import { motion, AnimatePresence } from "framer-motion";
// import { submitForm } from "../lib/submitForm";
// import { useRef, useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import DatePicker from "react-datepicker";

// const ContactModal = ({ isOpen, onClose }) => {
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const timeoutRef = useRef(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//     control,
//     watch,
//   } = useForm();

//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       // Clear any existing timeouts
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);

//       if (new Date(data.travelEndDate) < new Date(data.travelStartDate)) {
//         setErrorMessage("End date must be after start date");
//         timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
//         return;
//       }

//       const result = await submitForm(data);

//       if (!result.valid) {
//         setErrorMessage(result.message || "Invalid phone number");
//         timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
//         return;
//       }

//       // Show success state
//       setIsSuccess(true);

//       // Close modal after 4 seconds
//       // timeoutRef.current = setTimeout(() => {
//       //   reset();
//       //   onClose();
//       //   setIsSuccess(false);
//       // }, 4000);
//     } catch (error) {
//       setErrorMessage("Failed to submit form");
//       timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-sm"
//           onClick={onClose}
//           aria-hidden="true"
//         />

//         <motion.div
//           initial={{ scale: 0.9, y: 20, opacity: 0 }}
//           animate={{ scale: 1, y: 0, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           className="relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl sm:max-w-lg"
//         >
//           {/* Error Message Toast */}
//           <AnimatePresence>
//             {errorMessage && (
//               <motion.div
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-20"
//               >
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg
//                       className="h-5 w-5 text-red-500"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-red-800">Error</h3>
//                     <div className="mt-1 text-sm text-red-700">
//                       <p>{errorMessage}</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => setErrorMessage(null)}
//                     className="ml-auto -mx-1.5 -my-1.5 text-red-500 hover:text-red-700"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
//               <p className="text-sm text-gray-500 mt-1">
//                 We&apos;ll get back to you as soon as possible
//               </p>
//             </div>
//             <button
//               onClick={onClose}
//               className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl transition-colors"
//               aria-label="Close"
//             >
//               &times;
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {isSuccess ? (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-center py-8"
//               >
//                 <div className="flex justify-center mb-6">
//                   <div className="relative">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 150,
//                         damping: 15,
//                       }}
//                       className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
//                     >
//                       <svg
//                         className="w-12 h-12 text-green-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <motion.path
//                           initial={{ pathLength: 0 }}
//                           animate={{ pathLength: 1 }}
//                           transition={{
//                             delay: 0.2,
//                             duration: 0.5,
//                             ease: "easeOut",
//                           }}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         ></motion.path>
//                       </svg>
//                     </motion.div>
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{
//                         delay: 0.5,
//                         duration: 0.6,
//                         times: [0, 0.5, 1],
//                       }}
//                       className="absolute inset-0 rounded-full border-4 border-green-200 opacity-0"
//                       style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1)" }}
//                     />
//                   </div>
//                 </div>
//                 <motion.h3
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="text-2xl font-bold text-gray-800 mb-2"
//                 >
//                   Message Sent!
//                 </motion.h3>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="text-gray-600"
//                 >
//                   We&apos;ve received your message and will get back to you soon.
//                 </motion.p>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ delay: 0.8, duration: 2, ease: "linear" }}
//                   className="mt-8 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
//                 />
//               </motion.div>
//             ) : (
//               <motion.form
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="space-y-5"
//               >
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className={`w-full px-4 py-3 rounded-xl border ${
//                       errors.name ? "border-red-500" : "border-gray-300"
//                     } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
//                     placeholder="Your name"
//                     {...register("name", { required: "Name is required" })}
//                   />
//                   {errors.name && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     className={`w-full px-4 py-3 rounded-xl border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
//                     placeholder="you@example.com"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Invalid email address",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="custom-phone-input">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>

//                   <Controller
//                     name="phone"
//                     control={control}
//                     rules={{ required: "Phone number is required" }}
//                     render={({ field }) => (
//                       <PhoneInput
//                         country={"ca"}
//                         value={field.value}
//                         onChange={field.onChange}
//                         inputProps={{
//                           name: "phone",
//                           required: true,
//                           autoFocus: false,
//                         }}
//                         inputStyle={{
//                           width: "100%",
//                           color: "black",
//                           height: "3rem",
//                           borderRadius: "0.75rem",
//                           border: errors.phone
//                             ? "1px solid red"
//                             : "1px solid #ccc",
//                         }}
//                         containerStyle={{
//                           color: "black",
//                         }}
//                         dropdownStyle={{
//                           color: "black",
//                           backgroundColor: "white",
//                         }}
//                         buttonStyle={{
//                           backgroundColor: "white",
//                         }}
//                         dropdownClass="force-black-text"
//                       />
//                     )}
//                   />

//                   {errors.phone && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.phone.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* NEW: Travel Dates Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Travel Start Date <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name="travelStartDate"
//                       control={control}
//                       rules={{ required: "Start date is required" }}
//                       render={({ field }) => (
//                         <DatePicker
//                           selected={field.value}
//                           onChange={(date) => field.onChange(date)}
//                           minDate={today}
//                           dateFormat="MM/dd/yyyy"
//                           placeholderText="Select start date"
//                           className={`w-full px-4 py-3 rounded-xl border ${
//                             errors.travelStartDate
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
//                         />
//                       )}
//                     />
//                     {errors.travelStartDate && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.travelStartDate.message}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Travel End Date <span className="text-red-500">*</span>
//                     </label>
//                     <Controller
//                       name="travelEndDate"
//                       control={control}
//                       rules={{ required: "End date is required" }}
//                       render={({ field }) => {
//                         const startDate = watch("travelStartDate") || tomorrow;
//                         return (
//                           <DatePicker
//                             selected={field.value}
//                             onChange={(date) => field.onChange(date)}
//                             minDate={startDate}
//                             dateFormat="MM/dd/yyyy"
//                             placeholderText="Select end date"
//                             className={`w-full px-4 py-3 rounded-xl border ${
//                               errors.travelEndDate
//                                 ? "border-red-500"
//                                 : "border-gray-300"
//                             } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
//                           />
//                         );
//                       }}
//                     />
//                     {errors.travelEndDate && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {errors.travelEndDate.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* NEW: Trip Type Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Trip Type <span className="text-red-500">*</span>
//                   </label>
//                   <div className="space-y-2">
//                     <div className="flex items-center">
//                       <input
//                         type="radio"
//                         id="package"
//                         value="package"
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                         {...register("tripType", {
//                           required: "Please select a trip type",
//                         })}
//                       />
//                       <label
//                         htmlFor="package"
//                         className="ml-3 text-sm text-gray-700"
//                       >
//                         Planned Itinerary Package
//                       </label>
//                     </div>

//                     <div className="flex items-center">
//                       <input
//                         type="radio"
//                         id="custom"
//                         value="custom"
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                         {...register("tripType")}
//                       />
//                       <label
//                         htmlFor="custom"
//                         className="ml-3 text-sm text-gray-700"
//                       >
//                         Custom Trip
//                       </label>
//                     </div>
//                   </div>
//                   {errors.tripType && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.tripType.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="Type your message here..."
//                     {...register("message")}
//                   />
//                 </div>

//                 <div className="flex justify-end gap-3 pt-2">
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="cursor-pointer px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`cursor-pointer px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all ${
//                       isSubmitting
//                         ? "bg-blue-400 cursor-not-allowed"
//                         : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg"
//                     }`}
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center">
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </button>
//                 </div>
//               </motion.form>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default ContactModal;

"use client";

import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { submitForm } from "../lib/submitForm";
import { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";

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
    watch,
  } = useForm();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (new Date(data.travelEndDate) < new Date(data.travelStartDate)) {
        setErrorMessage("End date must be after start date");
        timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
        return;
      }

      const result = await submitForm(data);

      if (!result.valid) {
        setErrorMessage(result.message || "Invalid phone number");
        timeoutRef.current = setTimeout(() => setErrorMessage(null), 5000);
        return;
      }

      setIsSuccess(true);
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
        className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4"
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
          className="relative z-10 w-full max-w-[calc(100vw-1rem)] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-y-auto max-h-[calc(100vh-2rem)]"
        >
          {/* Error Message Toast */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 bg-red-50 border border-red-200 rounded-lg p-3 shadow-lg z-20"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 pt-0.5">
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
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="mt-0.5 text-sm text-red-700 break-words">
                      {errorMessage}
                    </p>
                  </div>
                  <button
                    onClick={() => setErrorMessage(null)}
                    className="ml-2 -my-1 -mr-1 text-red-500 hover:text-red-700 flex-shrink-0"
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

          <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
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
          </div>

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
                    We&apos;ve received your message and will get back to you
                    soon.
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
                        Travel Start Date{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="travelStartDate"
                        control={control}
                        rules={{ required: "Start date is required" }}
                        render={({ field }) => (
                          <DatePicker
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            minDate={today}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select start date"
                            className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
                              errors.travelStartDate
                                ? "border-red-500"
                                : "border-gray-300"
                            } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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
                          const startDate =
                            watch("travelStartDate") || tomorrow;
                          return (
                            <DatePicker
                              selected={field.value}
                              onChange={(date) => field.onChange(date)}
                              minDate={startDate}
                              dateFormat="MM/dd/yyyy"
                              placeholderText="Select end date"
                              className={`w-full px-3 py-2 text-sm sm:text-base rounded-lg border ${
                                errors.travelEndDate
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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
                    {/* <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-all ${
                        isSubmitting
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
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
                    </button> */}

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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
