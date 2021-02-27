import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div>
        <div className="bg-white inset-0 mt-48 overflow-auto overflow-y-auto  p-4 rounded-lg sm:max-w-sm md:max-w-md mx-auto shadow-lg">
          {children}
          <div className="grid grid-cols-2 gap-2 mt-1 pt-2">
            <a
              href="#"
              className="hover:no-underline no-underline"
              onClick={handleClose}
            >
              <div className="hover:text-black m-2 p-2 rounded-lg text-black">
                Continue Shopping
              </div>
            </a>
            <a href="#" className="hover:no-underline no-underline">
              <div className="bg-green-500 hover:bg-green-100 hover:text-black p-2 m-2 rounded-lg text-black ">
                CHECKOUT
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
