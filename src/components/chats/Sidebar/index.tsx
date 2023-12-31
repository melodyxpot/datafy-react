import React, { useState } from "react";
import {
  Avatar,
  BottomNavContainer,
  BottomNavItem,
  Hamburger,
  HamburgerContainer,
  NewChatButton,
  SidebarContainer
} from "./style";
import { Flex, Heading, Icon, Logo, Span } from "components/basic";
import { GV } from "utils/style.util";
import Conversation from "../Conversation";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import api from "utils/api";
import { useSelector } from "react-redux";
import useStore from "useStore";
import AccountDropdown from "./AccountDropdown";
import DeleteModal from "../DeleteModal";

interface PropsType {
  slideOpened: boolean;
  setSlideOpened: () => void;
}

const Sidebar: React.FC<PropsType> = ({ slideOpened, setSlideOpened }) => {
  const navigate = useNavigate();
  const { conversation, user } = useSelector((state: StoreObject) => state);
  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const [deleteState, setDeleteState] = useState<boolean>(false);
  const { update } = useStore();
  const dropdownRef = React.useRef<any>(null);

  React.useEffect(() => {
    const windowClick = (e: any) => {
      if (!dropdownRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };

    window.addEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, []);

  const handleAddNewChat = () => {
    navigate("/c/new-conversation");
  };

  const handleConversationDelete = (id: string) => {
    api
      .delete(`/convers/${id}`)
      .then(res => {
        if (res.data === "success") {
          const prevPos = conversation.map(item => item.id).indexOf(id);
          const prevConversations = [...conversation];
          update({
            conversation: conversation.filter(item => item.id !== id)
          });
          navigate("/c/new-conversation");
        }
      })
      .catch(err => {
        console.error(`CONVERSATION DELETE ERR :=> ${err}`);
      });
  };

  const handleClearConversations = () => {
    api
      .delete(`/convers`)
      .then((res: AxiosResponse) => {
        update({ conversation: [] });
        navigate("/c/new-conversation");
      })
      .catch((err: AxiosError) => {
        console.error(`Clear Conversation ERR :=> ${err}`);
      });
  };

  const handleDelete = () => {
    handleClearConversations();
    setDeleteState(false);
  };

  return (
    <SidebarContainer isopen={slideOpened}>
      <DeleteModal
        title={"Delete All Conversations"}
        isopen={deleteState}
        content={"Please confirm that you want to delete all conversations."}
        setIsOpen={setDeleteState}
        handleDelete={handleDelete}
      />
      <Flex
        $style={{
          flex: "1",
          $fDirection: "column",
          overflow: "hidden"
        }}
      >
        <Flex
          $style={{
            $fDirection: "column",
            $vAlign: "center",
            p: "1rem",
            gap: "10px"
          }}
        >
          <HamburgerContainer isopen={slideOpened}>
            <Hamburger isopen={slideOpened} onClick={setSlideOpened}>
              <span />
            </Hamburger>
          </HamburgerContainer>
          <Flex>
            <Logo />
          </Flex>
          <Flex
            $style={{
              display: "flex",
              $fDirection: "column",
              $vAlign: "center"
            }}
          >
            <Heading level={4}>DataFy</Heading>
            <Span>FileMaker Reader</Span>
          </Flex>
          <NewChatButton onClick={() => handleAddNewChat()}>
            {"+ New Chat"}
          </NewChatButton>
        </Flex>
        <Flex
          $style={{
            flex: "1",
            display: "flex",
            $fDirection: "column",
            p: "0 1rem",
            overflow: "auto",
            gap: "1rem"
          }}
        >
          <Heading
            level={6}
            $style={{
              $txtTransform: "uppercase"
            }}
          >
            Conversations
          </Heading>
          <Flex
            as={"ul"}
            $style={{
              $fDirection: "column"
            }}
          >
            {conversation.map((i, k: number) => (
              <Conversation
                key={k}
                conversation={i}
                onDelete={handleConversationDelete}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        $style={{
          $fDirection: "column",
          p: "0.5rem 1rem"
        }}
      >
        <BottomNavContainer>
          <AccountDropdown open={accountOpen} setOpen={setAccountOpen} />
          <BottomNavItem onClick={() => setDeleteState(true)}>
            <Avatar>
              <Icon icon="TrashLg" />
            </Avatar>
            <Span>Clear Conversation</Span>
          </BottomNavItem>
          <BottomNavItem
            onClick={() => setAccountOpen(accountOpen ? false : true)}
            ref={dropdownRef}
          >
            <Avatar bg={GV("white")}>{user && user.user.name[0]}</Avatar>
            <Flex
              $style={{
                flex: "1",
                $fDirection: "column"
              }}
            >
              <Span>{user && user.user.name}</Span>
            </Flex>
            <Icon icon="Setting" />
          </BottomNavItem>
        </BottomNavContainer>
      </Flex>
    </SidebarContainer>
  );
};

export default Sidebar;
