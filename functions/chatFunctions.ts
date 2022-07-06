import { KeyboardTypeOptions } from "react-native";
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

export const setChatLoading = (chats: Array<RegisterChatType>, key: string) => {
  return chats.map((chat) =>
    chat.name === key
      ? {
          ...chat,
          loading: true,
        }
      : chat
  );
};

export const changeChatTitle = (
  chats: Array<RegisterChatType>,
  key: string,
  title: string
) => {
  return chats.map((chat) =>
    chat.name === key
      ? {
          ...chat,
          title,
          loading: false,
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
    case 3:
      return chats.filter((elm) => elm.name === "phoneNumber").length !== 0;
    case 4:
      return (
        chats.filter((elm) => elm.name === "verificationCode").length !== 0
      );
    default:
      return true;
  }
};

export const getPlaceholder = (
  stepNumber: number,
  modifyStep: string
): string => {
  if (modifyStep === "none") {
    switch (stepNumber) {
      case 0:
        return "12345678@siffer.co.kr";
      case 1:
        return "Siffer1234!!";
      case 2:
        return "씨퍼 (2글자 이상 작성해주세요.)";
      case 3:
        return "'-'없이 입력해주세요.";
      case 4:
        return "123456";
      default:
        return "";
    }
  } else {
    switch (modifyStep) {
      case "emailResponse":
        return "12345678@siffer.co.kr";
      case "passwordResponse":
        return "Siffer1234!!";
      case "nicknameResponse":
        return "씨퍼 (2글자 이상 작성해주세요.)";
      case "phoneNumberResponse":
        return "'-'없이 입력해주세요.";
      case "verificationCodeResponse":
        return "123456";
      default:
        return "";
    }
  }
};

export function checkIsEmailValidated(email: string): boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export function checkIsPasswordValidated(password: string) {
  let upperTest = false;
  let numTest = false;
  let specialTest = false;

  const Upper = /[A-Z]/;
  const Normal = /[a-z]/;
  const Num = /[0-9]/;
  const Special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  if (Upper.test(password) && Normal.test(password) && password.length > 7) {
    upperTest = true;
  } else {
    upperTest = false;
  }

  if (Num.test(password)) {
    numTest = true;
  } else {
    numTest = false;
  }

  if (Special.test(password)) {
    specialTest = true;
  } else {
    specialTest = false;
  }
  if (upperTest && numTest && specialTest) {
    return true;
  }
  return false;
}

export function getBlurPasswordString(password: string): string {
  let output = "";
  for (var i = 0; i < password.length; i++) {
    output += "⦁";
  }
  return output;
}

export function getKeyBoardType(
  step: number,
  modifyStep: string
): KeyboardTypeOptions | undefined {
  if (modifyStep === "none") {
    if (step === 0) {
      return "email-address";
    } else if (step === 3) {
      return "numeric";
    } else if (step === 4) {
      return "numeric";
    } else {
      return undefined;
    }
  } else {
    if (modifyStep === "emailResponse") {
      return "email-address";
    } else if (modifyStep === "phoneNumber") {
      return "numeric";
    } else if (modifyStep === "verificationCode") {
      return "numeric";
    } else {
      return undefined;
    }
  }
}
