import {
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
  useState,
} from "react";
import {
  checkIsEmailValidated,
  checkIsPasswordValidated,
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
};

const ChatTextInput: FC<ChatTextInputProps> = ({
  step,
  text,
  setText,
  onTextSubmit,
  scrollRef,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
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
  }, [step, text]);

  return (
    <View style={styles.footer}>
      <TextInput
        autoFocus={true}
        style={styles.textInput}
        placeholder={getPlaceholder(step)}
        autoCapitalize="none"
        placeholderTextColor={colors.gray}
        keyboardType={
          step === 0
            ? "email-address"
            : step === 3
            ? "numeric"
            : step === 4
            ? "numeric"
            : undefined
        }
        value={text}
        onChangeText={setText}
        onSubmitEditing={buttonDisabled ? undefined : onTextSubmit}
        onFocus={() => scrollRef.current?.scrollToEnd({ animated: true })}
        secureTextEntry={step === 1 && !passwordVisible ? true : false}
        maxLength={step === 3 ? 13 : undefined}
      />
      {step === 1 && (
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
      {step === 2 && !buttonDisabled && (
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
