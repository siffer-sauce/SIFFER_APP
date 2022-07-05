import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
type ChatItemContainerProps = {
  received: boolean;
};

const ChatItemContainer: FC<PropsWithChildren<ChatItemContainerProps>> = ({
  children,
  received,
}) => {
  return (
    <View
      style={
        received === true
          ? styles.container
          : { ...styles.container, justifyContent: "flex-end" }
      }
    >
      {children}
    </View>
  );
};

export default ChatItemContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 2.5,
  },
});
