import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../lib/colors";
import ChatItem from "../../components/ChatItem";
import ChatItemContainer from "../../components/ChatItemContainer";
import {
  EmailContent,
  getStepComponents,
  NicknameContent,
  PasswordContent,
  PhoneNumberContent,
} from "./steps";
import { RegisterChatType } from "../../types/RegisterChatType";
import {
  changeChatContent,
  checkIsChatSended,
  getBlurPasswordString,
} from "../../functions/chatFunctions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../Navigation";
import ChatTextInput from "../../components/ChatTextInput";

const ANIMATION_DURATION = 300;

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  const scrollRef = useRef<ScrollView>(null);
  const [text, setText] = useState("");
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [registerChats, setRegisterChats] = useState<Array<RegisterChatType>>([
    getStepComponents(step),
  ]);

  const addChat = (newChat: RegisterChatType, wait?: number) => {
    setTimeout(
      () => {
        setRegisterChats((prev) => [...prev, newChat]);
      },
      wait ? wait : 0
    );
  };

  const onTextSubmit = () => {
    if (text.length > 0) {
      let myResponse: RegisterChatType;
      if (step === 1) {
        myResponse = { received: false, title: getBlurPasswordString(text) };
      } else {
        myResponse = { received: false, title: text };
      }
      addChat(myResponse);
      if (step === 0) {
        setEmail(text);
      } else if (step === 1) {
        setPassword(text);
      } else if (step === 2) {
        setNickname(text);
      } else if (step === 3) {
        setPhoneNumber(text);
      } else if (step === 4) {
        setVerificationCode(text);
      }
      setText("");
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step === 1 && password === "") {
      setRegisterChats((prev) =>
        changeChatContent(prev, "password", PasswordContent(1, text))
      );
    }
    if (step === 3) {
      if (text.length === 4 && text[text.length - 1] !== "-") {
        const newText = text.slice(0, 3) + "-" + text.slice(3);
        setText(newText);
      }
      if (text.length === 9 && text[text.length - 1] !== "-") {
        const newText = text.slice(0, 8) + "-" + text.slice(8);
        setText(newText);
      }
    }
  }, [text]);

  useEffect(() => {
    if (!checkIsChatSended(registerChats, step)) {
      addChat(getStepComponents(step), ANIMATION_DURATION);
    }
  }, [step]);

  useEffect(() => {
    if (email !== "") {
      setRegisterChats((prev) =>
        changeChatContent(prev, "email", EmailContent())
      );
    }
    if (password !== "") {
      setRegisterChats((prev) =>
        changeChatContent(prev, "password", PasswordContent(step, password))
      );
    }
    if (nickname !== "") {
      setRegisterChats((prev) =>
        changeChatContent(
          prev,
          "nickname",
          NicknameContent(() => {
            console.log("hi");
          })
        )
      );
    }
    if (phoneNumber !== "") {
      setRegisterChats((prev) =>
        changeChatContent(
          prev,
          "phoneNumber",
          PhoneNumberContent(() => {
            console.log("hi");
          })
        )
      );
    }
    if (verificationCode !== "") {
      addChat({ title: "씨퍼에 오신 것을 환영합니다.", received: true }, 300);
      addChat({ title: "감각적인 당신을 기다렸습니다.", received: true }, 600);
      setTimeout(
        () => navigation.reset({ routes: [{ name: "Render3D" }] }),
        1900
      );
    }
  }, [email, password, nickname, phoneNumber, verificationCode]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
        >
          {registerChats.map((chat, i) => {
            return (
              <ChatItemContainer received={chat.received} key={i}>
                <ChatItem
                  title={chat.title}
                  content={chat.content}
                  received={chat.received}
                />
              </ChatItemContainer>
            );
          })}
        </ScrollView>
        <ChatTextInput
          scrollRef={scrollRef}
          text={text}
          setText={setText}
          onTextSubmit={onTextSubmit}
          step={step}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
