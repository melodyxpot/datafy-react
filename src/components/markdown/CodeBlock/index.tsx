import { generateRandomString, programmingLanguages } from "utils/codeblock";
import { IconCheck, IconClipboard, IconDownload } from "@tabler/icons-react";
import { FC, useState, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeblockContainer, LangSpan, RefButton, SubContainer } from "./style";

interface PropsType {
  language: string;
  value: string;
}

const CodeBlock: FC<PropsType> = ({ language, value }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };
  const downloadAsFile = () => {
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(
      3,
      true
    )}${fileExtension}`;
    const fileName = window.prompt("Enter file name" || "", suggestedFileName);

    if (!fileName) {
      // user pressed cancel on prompt
      return;
    }

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <CodeblockContainer className="codeblock">
      <SubContainer>
        <LangSpan>{language}</LangSpan>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RefButton onClick={copyToClipboard}>
            {isCopied ? (
              <IconCheck size={18} style={{ marginRight: "0.375rem" }} />
            ) : (
              <IconClipboard size={18} style={{ marginRight: "0.375rem" }} />
            )}
            {isCopied ? "Copied!" : "Copy code"}
          </RefButton>
          <RefButton onClick={downloadAsFile}>
            <IconDownload size={18} />
          </RefButton>
        </div>
      </SubContainer>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ margin: 0 }}
      >
        {value}
      </SyntaxHighlighter>
    </CodeblockContainer>
  );
};

export default memo(CodeBlock);
