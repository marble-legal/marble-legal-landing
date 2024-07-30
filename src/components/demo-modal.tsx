"use client";
import Modal from "./modal";
import Drawer from "./modal";

export default function DemoDrawer({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h1>something</h1>
    </Modal>
  );
}
