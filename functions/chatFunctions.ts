import { RegisterChatType } from "../types/RegisterChatType";

export const changeChatContent = (
  chats: Array<RegisterChatType>,
  key: string,
  newContent: JSX.Element
) => {
  return chats.map((chat) =>
    chat.name === key
      ? {
          ...chat,
          content: newContent,
        }
      : chat
  );
};

export const checkIsChatSended = (
  chats: Array<RegisterChatType>,
  stepNumber: number
): boolean => {
  switch (stepNumber) {
    case 1:
      return chats.filter((elm) => elm.name === "password").length !== 0;
    case 2:
      return chats.filter((elm) => elm.name === "nickname").length !== 0;
    default:
      return true;
  }
};
