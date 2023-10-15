import { Snackbar } from "react-native-paper";
interface ToastComponentProps {
  visible: boolean;
  onDismiss: () => void;
}
export function ToastComponent({ visible, onDismiss }: ToastComponentProps) {
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
