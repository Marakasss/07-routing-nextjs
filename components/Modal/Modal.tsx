"use client";
import { createPortal } from "react-dom";
import css from "./NoteModal.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface NoteModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: NoteModalProps) => {
  const router = useRouter();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) router.back();
  };

  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    document.addEventListener("keydown", handleEscClick);
    return () => document.removeEventListener("keydown", handleEscClick);
  }, [router]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
