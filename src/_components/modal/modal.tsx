
import Modal from "react-modal";
import "./modal.css"
import type { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;//Reactのコンポーネントやテキスト
}

export const FormModal = ({ isOpen , handleClose, children }: Props) => {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}//枠外クリック可能
    >
      { children }
      <button onClick={handleClose}>閉じるボタン</button>
    </Modal>
  )
}