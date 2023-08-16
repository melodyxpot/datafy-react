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
import { SERVER_API } from "config/endpoints";

interface PropsType {
  slideOpened: boolean;
  setSlideOpened: () => void;
}

const Sidebar: React.FC<PropsType> = ({ slideOpened, setSlideOpened }) => {
  const navigate = useNavigate();
  const { conversation, user } = useSelector((state: StoreObject) => state);
  const { update } = useStore();

  const handleAddNewChat = () => {
    navigate("/c/new-conversation");
  };

  const handleConversationDelete = (id: string) => {
    api
      .delete(`/convers/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          const prevPos = conversation.map((item) => item.id).indexOf(id);
          update({
            conversation: conversation.splice(
              0,
              conversation.map((item: IConversation) => item.id).indexOf(id)
            )
          });
          console.log(prevPos);
          // navigate(
          //   `/${
          //     conversation[prevPos]
          //       ? conversation[prevPos]
          //       : conversation[conversation.length - 1]
          //   }`
          // );
        }
      })
      .catch((err) => {
        console.error(`CONVERSATION DELETE ERR :=> ${err}`);
      });
  };

  const handleClearConversations = () => {
    api
      .delete(`${SERVER_API}/api/convers`)
      .then((res: AxiosResponse) => {
        navigate("/c/new-conversation");
      })
      .catch((err: AxiosError) => {
        console.error(`Clear Conversation ERR :=> ${err}`);
      });
    console.log("Clear All Conversations");
  };

  return (
    <SidebarContainer isOpen={slideOpened}>
      <Flex
        $style={{
          flex: "1",
          fDirection: "column",
          overflow: "hidden"
        }}
      >
        <Flex
          $style={{
            fDirection: "column",
            vAlign: "center",
            p: "1rem",
            gap: "10px"
          }}
        >
          <HamburgerContainer isOpen={slideOpened}>
            <Hamburger isOpen={slideOpened} onClick={setSlideOpened}>
              <span />
            </Hamburger>
          </HamburgerContainer>
          <Flex>
            <Logo />
          </Flex>
          <Flex
            $style={{
              display: "flex",
              fDirection: "column",
              vAlign: "center"
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
            fDirection: "column",
            p: "0 1rem",
            overflow: "auto",
            gap: "1rem"
          }}
        >
          <Heading
            level={6}
            $style={{
              txtTransform: "uppercase"
            }}
          >
            Conversations
          </Heading>
          <Flex
            as={"ul"}
            $style={{
              fDirection: "column"
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
          fDirection: "column",
          p: "0.5rem 1rem"
        }}
      >
        <BottomNavContainer onClick={() => handleClearConversations()}>
          <BottomNavItem onClick={() => handleClearConversations()}>
            <Avatar>
              <Icon icon="TrashLg" />
            </Avatar>
            <Span>Clear Conversation</Span>
          </BottomNavItem>
          <BottomNavItem>
            <Avatar bg={GV("white")}>{user && user.user.name[0]}</Avatar>
            <Flex
              $style={{
                flex: "1",
                fDirection: "column"
              }}
            >
              <Span>{user && user.user.name}</Span>
              {/* <Span
                $style={{
                  size: "0.8rem"
                }}
              >
                Montibase
              </Span> */}
            </Flex>
            <Icon icon="Setting" />
          </BottomNavItem>
        </BottomNavContainer>
      </Flex>
    </SidebarContainer>
  );
};

export default Sidebar;
