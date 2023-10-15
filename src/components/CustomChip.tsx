import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";

interface CustomChipProps {
  text: string;
  icon: string;
  extraStyles?: any;
}
export function CustomChip({ text, icon, extraStyles }: CustomChipProps) {
  return (
    <Chip
      icon={icon}
      closeIcon="close"
      onClose={() => console.log()}
      rippleColor={"transparent"}
      style={[styles.chip, extraStyles]}
    >
      {text}
    </Chip>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 50,
    width: 150,
    marginStart: 10,
  },
});
