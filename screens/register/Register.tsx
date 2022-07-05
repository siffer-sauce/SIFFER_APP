import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../lib/colors";
import ChatItem from "../../components/ChatItem";
import ChatItemContainer from "../../components/ChatItemContainer";
import { AntDesign } from "@expo/vector-icons";
import HintText from "../../components/HintText";
import { getStepComponents } from "./steps";
import { RegisterChatType } from "../../types/RegisterChatType";
import {
  changeChatContent,
  checkIsChatSended,
} from "../../functions/chatFunctions";

const ANIMATION_DURATION = 300;

const Register = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [text, setText] = useState("");
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerChats, setRegisterChats] = useState<Array<RegisterChatType>>([
    getStepComponents(0),
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
      const myResponse: RegisterChatType = { received: false, title: text };
      addChat(myResponse);
      if (step === 0) {
        setEmail(text);
      } else if (step === 1) {
        setPassword(text);
      }
      setText("");
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!checkIsChatSended(registerChats, step)) {
      addChat(getStepComponents(step), ANIMATION_DURATION);
    }
  }, [step]);

  useEffect(() => {
    if (email !== "") {
      setRegisterChats((prev) =>
        changeChatContent(
          prev,
          "email",
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
              이메일 재입력
            </Text>
            <AntDesign name="right" size={14} color={colors.blue_secondary} />
          </TouchableOpacity>
        )
      );
    }
    if (password !== "") {
      setRegisterChats((prev) =>
        changeChatContent(
          prev,
          "password",
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
              비밀번호 재입력
            </Text>
            <AntDesign name="right" size={14} color={colors.blue_secondary} />
          </TouchableOpacity>
        )
      );
    }
  }, [email, password]);

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
        <View style={styles.footer}>
          <TextInput
            autoFocus={true}
            style={styles.textInput}
            placeholder="12345678@siffer.com"
            placeholderTextColor={colors.gray}
            value={text}
            onChangeText={setText}
            onSubmitEditing={onTextSubmit}
            onFocus={() => scrollRef.current?.scrollToEnd({ animated: true })}
          />
          <TouchableOpacity onPress={onTextSubmit}>
            <AntDesign
              name="arrowup"
              size={24}
              color={text.length > 0 ? colors.white : colors.gray}
            />
          </TouchableOpacity>
        </View>
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
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 24,
    paddingHorizontal: 16,
    bottom: 16,
  },
  textInput: {
    height: 40,
    flex: 1,
    padding: 10,
    marginRight: 15,
    color: colors.white,
    fontSize: 18,
  },
});
