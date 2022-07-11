import {
  InteractionManager,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  checkIsEmailValidated,
  checkIsPasswordValidated,
  getKeyBoardType,
  getPlaceholder,
} from "../functions/chatFunctions";
import { colors } from "../lib/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

type ChatTextInputProps = {
  step: number;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onTextSubmit: () => void;
  scrollRef: RefObject<ScrollView>;
  modifyStep: string;
};

const ChatTextInput: FC<ChatTextInputProps> = ({
  step,
  text,
  setText,
  onTextSubmit,
  scrollRef,
  modifyStep,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (modifyStep === "none") {
      if (step === 0 && checkIsEmailValidated(text)) {
        setButtonDisabled(false);
      } else if (step === 1 && checkIsPasswordValidated(text)) {
        setButtonDisabled(false);
      } else if (step === 2 && text.length > 1) {
        setButtonDisabled(false);
      } else if (step === 3 && text.length === 13) {
        setButtonDisabled(false);
      } else if (step === 4 && text.length === 6) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    } else {
      if (modifyStep === "emailResponse" && checkIsEmailValidated(text)) {
        setButtonDisabled(false);
      } else if (
        modifyStep === "passwordResponse" &&
        checkIsPasswordValidated(text)
      ) {
        setButtonDisabled(false);
      } else if (modifyStep === "nicknameResponse" && text.length > 1) {
        setButtonDisabled(false);
      } else if (modifyStep === "phoneNumberResponse" && text.length === 13) {
        setButtonDisabled(false);
      } else if (
        modifyStep === "verificationCodeResponse" &&
        text.length === 6
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [step, text]);

  return (
    <>
      <View style={styles.footer}>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          placeholder={getPlaceholder(step, modifyStep)}
          autoCapitalize="none"
          placeholderTextColor={colors.gray}
          keyboardType={getKeyBoardType(step, modifyStep)}
          value={text}
          onChangeText={setText}
          onSubmitEditing={buttonDisabled ? undefined : onTextSubmit}
          onFocus={() => scrollRef.current?.scrollToEnd({ animated: true })}
          secureTextEntry={
            ((step === 1 && modifyStep === "none") ||
              modifyStep === "passwordResponse") &&
            !passwordVisible
              ? true
              : false
          }
          maxLength={step === 3 ? 13 : step === 4 ? 6 : undefined}
        />
        {((step === 1 && modifyStep === "none") ||
          modifyStep === "passwordResponse") && (
          <TouchableOpacity
            onPress={() => setPasswordVisible((prev) => !prev)}
            style={{ marginRight: 10 }}
          >
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color={colors.gray}
            />
          </TouchableOpacity>
        )}
        {((step === 2 && modifyStep === "none") ||
          modifyStep === "nicknameResponse") &&
          !buttonDisabled && (
            <AntDesign
              name="check"
              size={24}
              color={colors.green}
              style={{ marginRight: 10 }}
            />
          )}
        <TouchableOpacity onPress={onTextSubmit} disabled={buttonDisabled}>
          <AntDesign
            name="arrowup"
            size={24}
            color={buttonDisabled ? colors.gray : colors.white}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatTextInput;

const styles = StyleSheet.create({
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
