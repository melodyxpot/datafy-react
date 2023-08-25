import React, { useRef, useState } from "react";
import { Flex, Icon } from "components/basic";
import {
  ChatInputWrapper,
  InputItem,
  DropdownButton,
  ChatEraser,
  SendButton
} from "./style";
import DropDown from "components/custom/dropdown";

interface PropsType {
  onSend: (text: string) => void;
  isChatting: boolean;
}

const labels = [
  {
    label: "GPT-4"
  },
  {
    label: "GPT-3.5"
  }
];

const ChatInput: React.FC<PropsType> = ({ onSend, isChatting }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [labelIndex, setLabelIndex] = useState<number>(0);

  // Send the input text to chat server
  const handleSend = () => {
    if (isChatting) {
      return;
    }
    let inputText = "";
    if (inputRef.current !== null) {
      if (
        inputRef.current.value !== "" &&
        inputRef.current.value !== undefined
      ) {
        inputText = inputRef.current.value;
        inputRef.current.value = "";
      }
    }
    onSend(inputText);
  };

  // Call handleSend when the user hit "Enter"
  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Delete the Input Text
  const handleInputDelete = () => {
    if (inputRef.current !== null) {
      if (
        inputRef.current.value !== "" &&
        inputRef.current.value !== undefined
      ) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <ChatInputWrapper>
      <InputItem
        placeholder="Ask to DataFy"
        ref={inputRef}
        onKeyUp={handleInputKeyUp}
      />
      <Flex
        $style={{
          hAlign: "space-between"
        }}
      >
        <Flex
          $style={{
            gap: "0.5rem",
            vAlign: "center"
          }}
        >
          {/* <DropDown
            label={labels[labelIndex].label}
            direct="top"
            container={(e: () => void) => (
              <Flex
                $style={{
                  fDirection: "column"
                }}
              >
                {labels.map((i, k) => (
                  <DropdownButton
                    key={k}
                    style={{}}
                    onClick={() => setLabelIndex(k)}
                  >
                    {i.label}
                  </DropdownButton>
                ))}
              </Flex>
            )}
          /> */}
          <ChatEraser onClick={handleInputDelete}>
            <Icon icon="Erase" />
          </ChatEraser>
        </Flex>
        <SendButton onClick={() => handleSend()} disabled={isChatting}>
          <Icon icon="Sent" />
        </SendButton>
      </Flex>
    </ChatInputWrapper>
  );
};

export default ChatInput;
