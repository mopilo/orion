import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Pressable, View, ViewStyle } from "react-native";
import { Searchbar, Text } from "react-native-paper";


export function CustomBottomSheet({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  searchQuery,
  close,
  onChangeSearch,
  index,
  bottomInset,
  detached,
  backgroundStyle,
  children,
}: {
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
  snapPoints: string[];
  handleSheetChanges: (index: number) => void;
  searchQuery?: string;
  close: () => void;
  onChangeSearch?: () => void;
  index: number;
  bottomInset: number;
  detached: boolean;
  backgroundStyle: ViewStyle;
  children: any;
}) {
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