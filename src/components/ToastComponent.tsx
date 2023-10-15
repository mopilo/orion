import { Snackbar } from "react-native-paper";

export function ToastComponent({
  visible,
  onDismiss,
}: {
  visible: boolean;
  onDismiss: () => void;
}) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: "Dismiss",
        onPress: () => {
          // Do something
        },
      }}
    >
      Yay! Your post has been created!
    </Snackbar>
  );
}