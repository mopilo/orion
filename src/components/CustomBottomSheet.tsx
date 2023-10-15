import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ViewStyle } from "react-native";

interface CustomBottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
  snapPoints: string[];
  handleSheetChanges: (index: number) => void;
  index: number;
  bottomInset: number;
  detached: boolean;
  backgroundStyle: ViewStyle;
  children: any;
}

export function CustomBottomSheet({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  index,
  bottomInset,
  detached,
  backgroundStyle,
  children,
}: CustomBottomSheetProps) {
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={index}
      bottomInset={bottomInset}
      backgroundStyle={backgroundStyle}
      onChange={handleSheetChanges}
      detached={detached}
    >
      {children}
    </BottomSheetModal>
  );
}
