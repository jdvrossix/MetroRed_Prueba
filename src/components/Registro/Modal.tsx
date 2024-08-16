import React from "react";
import { Modal, Box } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
