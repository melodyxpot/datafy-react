import React, { useState } from "react";
import MemoizedReactMarkdown from "components/markdown/MemoizedReactMarkdown";
import CodeBlock from "components/markdown/CodeBlock";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import {
  ChatItem,
  ChatItemWrapper,
  MarkdownTD,
  MarkdownTH,
  MarkdownTR,
  MarkdownTable
} from "./style";
import AIAvatar from "assets/images/avatar.png";
import UserAvatar from "assets/images/user.png";
import { CopyButton } from "../CopyButton";
import { Flex } from "components/basic";

interface PropsType {
  message: Message;
}

const ChatMessage: React.FC<PropsType> = ({ message }) => {
  const [messagedCopied, setMessageCopied] = useState(false);

  const handleMessageCopy = () => {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(message.content).then(() => {
      setMessageCopied(true);
      setTimeout(() => {
        setMessageCopied(false);
      }, 2000);
    });
  };
  return (
    <ChatItem role={message.role}>
      <ChatItemWrapper>
        <Flex>
          <img
            src={message.role === "assistant" ? AIAvatar : UserAvatar}
            style={{
              width: "2rem",
              height: "2rem",
              userSelect: "none",
              marginRight: "1rem",
              borderRadius: "50%"
            }}
          />
          <MemoizedReactMarkdown
            className="prose"
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeMathjax]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <CodeBlock
                    key={Math.random()}
                    language={match[1]}
                    value={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              table({ children }) {
                return <MarkdownTable>{children}</MarkdownTable>;
              },
              tr({ children }) {
                return <MarkdownTR>{children}</MarkdownTR>;
              },
              th({ children }) {
                return <MarkdownTH>{children}</MarkdownTH>;
              },
              td({ children }) {
                return <MarkdownTD>{children}</MarkdownTD>;
              }
            }}
          >
            {message.content}
          </MemoizedReactMarkdown>
        </Flex>
        {message.role === "assistant" && (
          <Flex>
            <CopyButton
              messagedCopied={messagedCopied}
              copyOnClick={handleMessageCopy}
            />
          </Flex>
        )}
      </ChatItemWrapper>
    </ChatItem>
  );
};

export default ChatMessage;
