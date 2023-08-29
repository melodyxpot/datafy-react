import React from "react";
import {
  CancelButton,
  DeleteButton,
  ModalContainer,
  ModalContent,
  ModalHeader
} from "./style";
import { Flex } from "components/basic";

interface PropsType {
  title: string;
  isopen: boolean;
  setIsOpen: (param: boolean) => void;
  handleDelete: () => void;
  content: string;
}

const DeleteModal: React.FC<PropsType> = ({
  title,
  isopen: isOpen,
  setIsOpen,
  handleDelete,
  content
}) => {
  const modalRef = React.useRef<any>(null);

  React.useEffect(() => {
    const windowClick = (e: any) => {
      if (!modalRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, []);

  return (
    <ModalContainer open={isOpen}>
      <ModalContent ref={modalRef}>
        <ModalHeader>{title}</ModalHeader>
        <p style={{ textAlign: "center", margin: "15px", fontSize: "1rem" }}>
          {content}
        </p>
        <Flex $style={{ $hAlign: "end", $fDirection: "row" }}>
          <CancelButton onClick={() => setIsOpen(false)}>Cancel</CancelButton>
          <DeleteButton onClick={() => handleDelete()}>Confirm</DeleteButton>
        </Flex>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteModal;
