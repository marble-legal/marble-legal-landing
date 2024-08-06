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
      <video width="1024px" controls autoPlay className="rounded-[8px]">
        <source
          src="https://s3.amazonaws.com/dev.assets.marblels.com/draft-analysis-2.webm"
          type="video/webm"
        />
      </video>
    </Modal>
  );
}
