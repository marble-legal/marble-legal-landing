"use client";
import Modal from "./modal";
import Drawer from "./modal";

export default function ContactUsModal({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h1>contactus</h1>
    </Modal>
  );
}
