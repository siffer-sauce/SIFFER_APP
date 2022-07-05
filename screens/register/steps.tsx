import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../lib/colors";
import { RegisterChatType } from "../../types/RegisterChatType";
import { AntDesign } from "@expo/vector-icons";
import { FC, useEffect, useRef, useState } from "react";

export const getStepComponents = (stepNumber: number): RegisterChatType => {
  switch (stepNumber) {
    case 0:
      return {
        received: true,
        title: "이메일을 입력해주세요.",
        content: (
          <Text style={{ marginTop: 8, color: colors.gray }}>
            입장을 위해 처음 한 번 입력이 필요합니다.
          </Text>
        ),
        name: "email",
      };
    case 1:
      return {
        received: true,
        title: "비밀번호를 입력해주세요.",
        name: "password",
        content: (
          <>
            <Text style={{ marginTop: 8, color: colors.gray }}>
              대소문자 8자 이상, 숫자, 특수기호를
            </Text>
            <Text style={{ color: colors.gray }}>포함해야 해요.</Text>
          </>
        ),
      };
    case 2:
      return {
        received: true,
        title: "닉네임을 정해주세요.",
        name: "nickname",
        content: (
          <>
            <Text style={{ marginTop: 8, color: colors.gray }}>
              나중에 언제든 변경할 수 있어요.
            </Text>
          </>
        ),
      };
    case 3:
      return {
        received: true,
        title: "전화번호만 입력하면 끝!",
        name: "phoneNumber",
        content: (
          <>
            <Text style={{ marginTop: 8, color: colors.gray }}>
              철통보안을 위해 부탁드릴게요.
            </Text>
          </>
        ),
      };
    case 4:
      return {
        received: true,
        title: "인증번호를 입력해주세요.",
        name: "verificationCode",
        content: (
          <VerificationCodeContent onPress={() => console.log("sdfs")} />
        ),
      };
    default:
      return {
        received: true,
        title: "예기치 못한 에러가 발생했습니다.",
      };
  }
};

type ContentProps = {
  onPress: () => void;
};

export const EmailContent = (onPress: () => void) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
        이메일 재입력
      </Text>
      <AntDesign name="right" size={14} color={colors.blue_secondary} />
    </TouchableOpacity>
  );
};

export const PasswordContent = (step: number, password: string) => {
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

  return (
    <>
      {step !== 1 ? (
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
      ) : (
        <>
          <View style={{ marginTop: 8, flexDirection: "row" }}>
            <Text style={{ color: upperTest ? colors.green : colors.gray }}>
              대소문자 8자 이상
            </Text>
            <Text style={{ color: colors.gray }}>, </Text>
            <Text style={{ color: numTest ? colors.green : colors.gray }}>
              숫자
            </Text>
            <Text style={{ color: colors.gray }}>, </Text>
            <Text style={{ color: specialTest ? colors.green : colors.gray }}>
              특수기호
            </Text>
            <Text style={{ color: colors.gray }}>를</Text>
          </View>
          <Text style={{ color: colors.gray }}>포함해야 해요.</Text>
        </>
      )}
    </>
  );
};

export const NicknameContent = (onPress: () => void) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
        닉네임 재입력
      </Text>
      <AntDesign name="right" size={14} color={colors.blue_secondary} />
    </TouchableOpacity>
  );
};

export const PhoneNumberContent = (onPress: () => void) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
        전화번호 재입력
      </Text>
      <AntDesign name="right" size={14} color={colors.blue_secondary} />
    </TouchableOpacity>
  );
};

export const VerificationCodeContent: FC<ContentProps> = ({ onPress }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
        }}
        onPress={() => {
          setMinutes(1);
          setSeconds(0);
        }}
      >
        <Text style={{ color: colors.blue_secondary, marginRight: 4 }}>
          인증번호 재발송
        </Text>
        <AntDesign name="right" size={14} color={colors.blue_secondary} />
      </TouchableOpacity>
      <Text style={{ color: colors.gray, marginTop: 7, marginRight: -20 }}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
};

export const LoadingContent = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const fadeIn = Animated.timing(animatedValue, {
    toValue: 1,
    duration: 250,
    useNativeDriver: false,
    easing: Easing.bounce,
  });
  useEffect(() => {
    Animated.loop(fadeIn, { iterations: -1 });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text
        style={[{ color: colors.black }, { fontSize: animatedValue }]}
      >
        ⦁
      </Animated.Text>
      <Animated.Text>⦁</Animated.Text>
      <Animated.Text>⦁</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_secondary,
    paddingHorizontal: 32,
    paddingVertical: 22,
    borderRadius: 16,
    flexDirection: "row",
  },
});
