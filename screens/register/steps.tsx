import { Text } from "react-native";
import { colors } from "../../lib/colors";
import { RegisterChatType } from "../../types/RegisterChatType";

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
    default:
      return {
        received: true,
        title: "예기치 못한 에러가 발생했습니다.",
      };
  }
};
