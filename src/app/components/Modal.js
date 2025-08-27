// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

// const Modal = ({
//   isOpen,
//   onClose,
//   isShowModalHeader = true,
//   heading = "",
//   subheading = "",
//   children,
// }) => {
//   useEffect(() => {
//     if (isOpen) {
//       const scrollY = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.width = "100%";

//       return () => {
//         document.body.style.position = "";
//         document.body.style.top = "";
//         document.body.style.width = "";
//         window.scrollTo(0, scrollY);
//       };
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4"
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
//           className="relative z-10 w-full max-w-[calc(100vw-1rem)] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-y-auto max-h-[calc(100vh-2rem)]"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {isShowModalHeader && (
//             <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b border-gray-100">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     {heading}
//                   </h2>
//                   <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
//                     {subheading}
//                   </p>
//                 </div>
//                 <button
//                   onClick={onClose}
//                   className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl transition-colors"
//                   aria-label="Close"
//                 >
//                   &times;
//                 </button>
//               </div>
//             </div>
//           )}

//           {children}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Modal;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  isShowModalHeader = true,
  heading = "",
  subheading = "",
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      const body = document.body;

      // Store original styles to revert later
      const originalStyles = {
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
        overflow: body.style.overflow,
        height: body.style.height,
      };

      // Apply scroll lock styles
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
      body.style.height = "100%";

      return () => {
        // Revert to original styles
        body.style.position = originalStyles.position;
        body.style.top = originalStyles.top;
        body.style.width = originalStyles.width;
        body.style.overflow = originalStyles.overflow;
        body.style.height = originalStyles.height;

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4"
        style={{
          WebkitOverflowScrolling: "touch",
          // iOS viewport height fix
          height: "100vh",
          height: "-webkit-fill-available",
        }}
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
          className="relative z-10 w-full max-w-[calc(100vw-1rem)] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-xl shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: "90vh",
            maxHeight: "-webkit-fill-available",
            WebkitTransform: "translateZ(0px)",
            // Prevent elastic scrolling on iOS
            overflow: "hidden",
          }}
        >
          {isShowModalHeader && (
            <div className="flex-shrink-0 bg-white z-10 p-4 sm:p-6 border-b border-gray-100">
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
                  className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl transition-colors flex items-center justify-center w-8 h-8"
                  aria-label="Close"
                  style={{ fontSize: "28px", lineHeight: "1" }}
                >
                  &times;
                </button>
              </div>
            </div>
          )}

          <div
            className="flex-1 overflow-y-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Modal;
