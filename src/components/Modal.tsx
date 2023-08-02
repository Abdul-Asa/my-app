import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      data-modal-placement="center"
      className="absolute top-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center content-center flex-wrap backdrop-blur-md"
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-fit">
        <div className="p-6 text-center rounded-lg bg-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;