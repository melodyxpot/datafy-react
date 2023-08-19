import React from "react";
import {
  CancelButton,
  DeleteButton,
  ModalContainer,
  ModalContent
} from "./style";
import { Flex } from "components/basic";

interface PropsType {
  title: string;
  isOpened: boolean;
  setIsOpened: (param: boolean) => void;
  handleDelete: () => void;
}

const DeleteModal: React.FC<PropsType> = ({
  title,
  isOpened,
  setIsOpened,
  handleDelete
}) => {
  const modalRef = React.useRef<any>(null);

  React.useEffect(() => {
    const windowClick = (e: any) => {
      if (!modalRef.current.contains(e.target) && isOpened) {
        setIsOpened(false);
      }
    };

    window.addEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, []);

  return (
    <ModalContainer open={isOpened}>
      <ModalContent ref={modalRef}>
        <p style={{ textAlign: "center", margin: "10px" }}>
          This will delete {title}
        </p>
        <Flex $style={{ hAlign: "end", fDirection: "row" }}>
          <CancelButton onClick={() => setIsOpened(false)}>Cancel</CancelButton>
          <DeleteButton onClick={() => handleDelete()}>Delete</DeleteButton>
        </Flex>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteModal;
