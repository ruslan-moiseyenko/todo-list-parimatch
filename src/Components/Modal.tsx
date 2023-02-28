import React, { MouseEvent, ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal")!;

export function Modal({
  onClose,
  children
}: {
  onClose: () => void;
  children: ReactNode;
}) {
  const handleClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal__backdrop" onClick={handleClick}>
      <div className="modal__content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}
