import { Button } from "antd";
import { ReactNode, useState } from "react";
import { AppString } from "../../constants/strings";

interface ModalProps {
  title: string;
  isVisible: boolean;
  children: ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
}

const Modal = ({
  title,
  children,
  isVisible,
  onClose,
  onConfirm,
  showConfirmButton,
  showCancelButton,
  confirmButtonDisabled,
  cancelButtonDisabled,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isVisible);
  const onConfirmButtonClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    setShowModal(false);
  };
  const onCloseButtonClick = () => {
    if (onClose) {
      onClose();
    }
    setShowModal(false);
  };
  if (showModal) {
    return (
      <div className="customModal">
        <div className="custom-modal-header">{title}</div>
        <div className="custom-modal-body">{children}</div>
        <div className="custom-modal-footer">
          {showConfirmButton && (
            <Button
              onClick={onConfirmButtonClick}
              disabled={confirmButtonDisabled}
            >
              {AppString.MODAL_BUTTON_CONFIRMATION}
            </Button>
          )}
          {showCancelButton && (
            <Button
              onClick={onCloseButtonClick}
              disabled={cancelButtonDisabled}
            >
              {AppString.MODAL_BUTTON_CANCEL}
            </Button>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
