import { Flex, Heading } from "components/basic";
import { ChatContainer, ChatInputContainer, HeaderContainer } from "./style";
import Header from "components/chats/Header";
import Sidebar from "components/chats/Sidebar";
import { usePrivateLayoutContext } from "contexts/PrivateLayoutContext";
import SidebarMask from "components/chats/SidebarMask";
import ChatMessage from "components/chats/ChatMessage";
import InputItem from "components/chats/ChatInput";
import { useEffect, useRef, useState } from "react";
import { SERVER_API } from "config/endpoints";
import { AxiosError, AxiosResponse } from "axios";
import api from "utils/api";
import useStore from "useStore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ChatField = () => {
  const { store, setStore } = usePrivateLayoutContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const { update } = useStore();
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const { user, isAuthenticated, conversation } = useSelector(
    (state: StoreObject) => state
  );
  const params = useParams<ChatUrlType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null && user.token !== undefined && isAuthenticated) {
      getConversation();
    }
  }, [user]);

  useEffect(() => {
    console.log(params.convers_id);

    if (params.convers_id) {
      if (params.convers_id === "new-conversation") {
        setMessages([]);
        setIsChatting(false);
      } else {
        console.log("1");
        if (
          conversation.filter((item) => item.id === params.convers_id)
            .length !== 0
        ) {
          getChats(params.convers_id);
        } else {
          console.log("111");
          navigate("/c/new-conversation");
        }
      }
    } else {
      navigate("/c/new-conversation");
    }
  }, [params.convers_id]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const { slideOpened } = store;
  const setSlideOpened = () => {
    setStore({ slideOpened: !slideOpened });
  };

  const getChats = (conversId: string) => {
    api
      .get(`/chat?convers_id=${conversId}`)
      .then((res: AxiosResponse) => {
        setMessages(
          res.data.map((item: Message) => ({
            role: item.role,
            content: item.content
          }))
        );
      })
      .catch((err: AxiosError) => {
        console.error(`Chats GET ERR :=> ${err}`);
      });
  };

  const getConversation = () => {
    api
      .get("/convers")
      .then((res: AxiosResponse) => {
        update({ conversation: res.data });
      })
      .catch((err: AxiosError) => {
        console.error(`CONVERSATION GET ERR :=> ${err}`);
      });
  };

  const handleSend = async (inputText: string) => {
    setIsChatting(true);
    let chatBody: ChatBody = {
      model: {
        name: "GPT_4",
        id: "gpt-4"
      },
      messageInput: []
    };
    if (messages.length !== 0) {
      handleInsertChat({
        role: "user",
        content: inputText
      });
    }

    let responseMessage = "";

    chatBody = {
      ...chatBody,
      messageInput: [
        ...messages,
        {
          role: "user",
          content: inputText
        }
      ]
    };

    setMessages((msg) => [
      ...msg,
      {
        role: "user",
        content: inputText
      }
    ]);

    api
      .post("/chat/chat-order", chatBody)
      .then((res: AxiosResponse) => {
        let resStart = true;
        const chatXhr = new XMLHttpRequest();
        chatXhr.open("GET", `${SERVER_API}/api/chat/chat?orderId=${res.data}`);
        chatXhr.onprogress = function () {
          if (resStart) {
            setMessages((msg) => [
              ...msg,
              {
                role: "assistant",
                content: ""
              }
            ]);
            resStart = false;
          }
          responseMessage = chatXhr.responseText;
          setMessages((msg) =>
            msg.map((item: Message, i: number) => {
              if (i === msg.length - 1) {
                return {
                  role: "assistant",
                  content: chatXhr.responseText
                };
              }
              return item;
            })
          );
        };
        chatXhr.onloadend = function () {
          const firstConversation: Message[] = [
            { role: "user", content: inputText },
            { role: "assistant", content: responseMessage }
          ];
          setIsChatting(false);
          if (messages.length === 0) {
            api
              .post("/convers/c-title", { conversation: firstConversation })
              .then((res: AxiosResponse) => {
                const title = res.data.choices[0].message.content;
                if (typeof title === "string") {
                  handleCreateNewConversation(
                    firstConversation,
                    title.replace(/"/g, "")
                  );
                }
              })
              .catch((err: AxiosError) => {
                console.error(`C-Title Making Error :=> ${err}`);
              });
          } else {
            handleInsertChat({
              role: "assistant",
              content: responseMessage
            });
          }
        };
        chatXhr.send();
      })
      .catch((err: AxiosError) => {
        console.error(`GPT Conversation ERR :=> ${err}`);
      });
  };

  const handleCreateNewConversation = (chats: Message[], title: string) => {
    api
      .post("/convers", { chats: chats, title: title })
      .then((res: AxiosResponse) => {
        update({
          conversation: [
            {
              id: res.data.conId,
              title: res.data.title,
              messages: messages
            },
            ...conversation
          ]
        });
        navigate(`/c/${res.data.conId}`);
      })
      .catch((err: AxiosError) => {
        console.error(`Conversation Create ERR :=> ${err}`);
      });
  };

  const handleInsertChat = (chat: Message) => {
    api
      .post(`/chat?con_id=${params.convers_id}`, chat)
      .then((res) => {
        console.log("Insert Success");
      })
      .catch((err) => {
        console.error(`Chat Insert ERR :=> ${err}`);
      });
  };

  return (
    <Flex
      $style={{
        fDirection: "row",
        h: "100vh"
      }}
    >
      <SidebarMask slideOpened={slideOpened} setSlideOpened={setSlideOpened} />
      <Sidebar slideOpened={slideOpened} setSlideOpened={setSlideOpened} />
      <ChatContainer>
        <Header setSlideOpened={setSlideOpened} slideOpened={slideOpened} />
        <HeaderContainer>
          <Heading level={5}>
            {params.convers_id === "new-conversation"
              ? "New Conversation with Datafy"
              : conversation.filter((item) => item.id === params.convers_id)[0]
                  .title}
          </Heading>
        </HeaderContainer>
        <Flex
          $style={{
            flex: "1",
            fDirection: "column",
            overflow: "scroll"
          }}
        >
          {messages.map((i: Message, k: number) => (
            <ChatMessage key={k} message={i} />
          ))}
          <div ref={chatEndRef} />
        </Flex>
        <ChatInputContainer>
          <InputItem onSend={handleSend} isChatting={isChatting} />
        </ChatInputContainer>
      </ChatContainer>
    </Flex>
  );
};

export default ChatField;
