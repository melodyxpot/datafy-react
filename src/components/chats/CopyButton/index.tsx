import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { FC } from "react";

type Props = {
  messagedCopied: boolean;
  copyOnClick: () => void;
};

export const CopyButton: FC<Props> = ({ messagedCopied, copyOnClick }) => (
  <button>
    {messagedCopied ? (
      <IconCheck size={20} strokeWidth={1} />
    ) : (
      <IconClipboard size={20} onClick={copyOnClick} strokeWidth={1} />
    )}
  </button>
);
