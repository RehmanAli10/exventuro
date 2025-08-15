"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function ToastMessage({
  message,
  type = "error",
  onDismiss,
  autoDismiss = true,
  dismissTimeout = 5000,
  position = "top-center",
  showCloseButton = true,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissTimeout);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTimeout, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onDismiss) onDismiss();
    }, 300);
  };

  if (!message) return null;

  const config = {
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: (
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
      ),
      title: "Error",
      text: "text-red-700",
      titleText: "text-red-800",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: (
        <svg
          className="h-5 w-5 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
      title: "Success",
      text: "text-green-700",
      titleText: "text-green-800",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: (
        <svg
          className="h-5 w-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "Info",
      text: "text-blue-700",
      titleText: "text-blue-800",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: (
        <svg
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Warning",
      text: "text-yellow-700",
      titleText: "text-yellow-800",
    },
  };

  const { bg, border, icon, title, text, titleText } =
    config[type] || config.error;

  const positionClasses = {
    "top-left": "top-2 left-2",
    "top-center": "top-2 left-1/2 -translate-x-1/2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-center": "bottom-2 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-2 right-2",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed ${positionClasses[position]} w-[calc(100%-1rem)] max-w-md z-[10000]`}
        >
          <div className={`${bg} ${border} rounded-lg border p-3 shadow-lg`}>
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 pt-0.5">{icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-sm font-medium ${titleText}`}>{title}</h3>
                <p className={`mt-0.5 text-sm ${text} break-words`}>
                  {message}
                </p>
              </div>
              {showCloseButton && (
                <button
                  onClick={handleDismiss}
                  className="ml-2 -my-1 -mr-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
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
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ToastMessage;
