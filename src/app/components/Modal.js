import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
  isOpen,
  onClose,
  isShowModalHeader = true,
  heading = "",
  subheading = "",
  children,
}) => {
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
          {isShowModalHeader && (
            <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {heading}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                    {subheading}
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
          )}

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
